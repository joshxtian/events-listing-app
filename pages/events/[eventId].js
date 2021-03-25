import { useEffect } from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import { EventItemCard } from "../../components";
import { Spinner } from "@chakra-ui/spinner";
import Head from "next/head";

const EventDetailPage = (props) => {
  const event = props.selectedEvent;

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
          <Text mt={5} w={900} textAlign="center" fontWeight="500">
            {event.description}
          </Text>
        </Center>
      </Box>
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
