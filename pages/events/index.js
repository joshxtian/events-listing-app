import { Center } from "@chakra-ui/layout";
import { EventList } from "../../components";
import {getAllEvents} from '../../dummy-data';

const EventsPage = () =>{
  const allEvents = getAllEvents();

  return (
    <div>
      <Center>
        <EventList events={allEvents}/>
      </Center>
    </div>
  );
}

export default EventsPage;