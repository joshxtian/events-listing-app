import {useEffect} from 'react';
import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import {EventItemCard} from '../../components';

const EventDetailPage = () => {
  const router = useRouter();

  console.log(router.query);
  const event = getEventById(router.query.eventId);
  if(!event){
    return <p>No Event Found</p>
  }

  return (
    <Box>
      <Box
      h={250}
      bgGradient="linear(to-r, green.200, pink.500)"
      pt={35}>
          <Heading
          color="white"
          textAlign="center"
          fontSize="50px"
          >
            {event.title}
          </Heading>
      </Box>
      <Center
      display="flex"
      flexDirection="column"
      >
        <EventItemCard {...event}/>
        <Text
        mt={5}
        w={900}
        textAlign="center"
        fontWeight="500"
        >
          {event.description}
        </Text>
      </Center>
    </Box>
  );
};
export default EventDetailPage;
