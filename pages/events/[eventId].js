import { useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import { EventItemCard } from "../../components";
import { Spinner } from "@chakra-ui/spinner";
import Head from "next/head";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";

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
          <Text mt={5} fontWeight="500">
            {event.description}
          </Text>
        </Center>
      </Box>
      <Center my="5">
        <Button variant="outline" colorScheme="blue">
          Show Comments
        </Button>
      </Center>

      <Center>
        <Flex w="45%" flexDirection="column">
          <Box bg="#272627" borderRadius={5} w="100%" as="form" p={5} color="white">
            <Stack>
              <HStack spacing={10}>
                <FormControl id="email">
                  <FormLabel>Your Email</FormLabel>
                  <Input input="email" placeholder="Enter Your Email" />
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <Input input="text" placeholder="Enter Your Name"/>
                </FormControl>
              </HStack>
              <Box>
                <FormControl id="comment">
                  <FormLabel>Your Comment</FormLabel>
                  <Textarea
                    placeholder="Say Something"
                    resize="none"
                    rows={10}
                  />
                </FormControl>
                <Button float="right" mt={3} variant="outline">Submit</Button>
              </Box>
            </Stack>
          </Box>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit praesentium molestiae natus eligendi in nulla ipsa, nam distinctio voluptatem quos ratione cupiditate animi excepturi maiores ex architecto sed quod.
          </Box>
        </Flex>
      </Center>
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
