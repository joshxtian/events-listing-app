import { useEffect, useState } from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/layout";

import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import { EventItemCard } from "../../components";
import { Spinner } from "@chakra-ui/spinner";
import Head from "next/head";
import { Button } from "@chakra-ui/button";

import Comments from "../../components/comments/Comments";
import CommentsList from "../../components/comments/CommentsList";
import CommentBox from "../../components/comments/CommentBox";

const EventDetailPage = (props) => {
  const event = props.selectedEvent;
  const [displayComments, setDisplayComments] = useState(false);
  const [commentList, setCommentList] = useState([]);

  if (!event) {
    return (
      <>
        <Center>
          <Box h={"100vh"} display="flex" alignItems="center">
            <Spinner size="xl">No Event Found</Spinner>
          </Box>
        </Center>
      </>
    );
  }

  useEffect(()=>{
    if(displayComments){
      fetch(`/api/comments/${event.id}`).then(response=>response.json()).then(data=>setCommentList(data.comments));
    }
  },[displayComments]);

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <Box>
        <Box h={250} bgGradient="linear(to-r, green.200, pink.500)" pt={35}>
          <Heading color="white" textAlign="center" fontSize="50px">
            {event.title}
          </Heading>
        </Box>
        <Center display="flex" flexDirection="column">
          <EventItemCard {...event} />
          <Text mt={5} fontWeight="500">
            {event.description}
          </Text>
        </Center>
      </Box>
      <Center my="5">
        <Button
          onClick={setDisplayComments.bind(null, !displayComments)}
          variant="outline"
          colorScheme="blue"
        >
          {displayComments ? "Hide Comments " : "Show Comments"}
        </Button>
      </Center>
      {displayComments && <Comments eventId={event.id} />}
      {displayComments && (
        <>
          <Center>
            <CommentsList>
              {commentList.map(comment=>{
                return <CommentBox key={comment.id} id={comment.id} content={comment.comment} name={comment.name}/>
              })}
            </CommentsList>
          </Center>
        </>
      )}
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default EventDetailPage;
