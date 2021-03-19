import { Center } from "@chakra-ui/layout";
import { List, Box} from "@chakra-ui/layout";
import EventItem from "./EventItem";

const EventList = ({events}) => {
  return (
    <Box w={"90%"}>
      <Center>
      <List>
        {events.map(event=>{
          return (
            <EventItem
              key={event.id}
              {...event}
            />
          )
        })}
      </List>
      </Center>
      
    </Box>
  )
}

export default EventList
