import {Router, useRouter} from 'next/router';
import { Center } from "@chakra-ui/layout";
import { EventList, EventSearch } from "../../components";
import {getAllEvents} from '../../dummy-data';
import {HeaderText} from '../../components';

const EventsPage = () =>{
  const router = useRouter();
  const allEvents = getAllEvents();

  const handleSearch = (year,month) =>{
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <HeaderText>
        All Events
      </HeaderText>
      <EventSearch onSearch={handleSearch}/>
      <Center>
        <EventList events={allEvents}/>
      </Center>
    </>
  );
}

export default EventsPage;