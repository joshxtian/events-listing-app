import { Center } from "@chakra-ui/layout";
import { List, Box } from "@chakra-ui/layout";
import MessageBox from "../MessageBox/MessageBox";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
  if (!events) {
    return <MessageBox>There are no found events</MessageBox>;
  }
  return (
    <Box w={"90%"}>
      <Center>
        <List>
          {events.map((event) => {
            return <EventItem key={event.id} {...event} />;
          })}
        </List>
      </Center>
    </Box>
  );
};

export default EventList;
