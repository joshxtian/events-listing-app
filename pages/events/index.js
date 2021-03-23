import {Router, useRouter} from 'next/router';
import { Center } from "@chakra-ui/layout";
import { EventList, EventSearch } from "../../components";
import {getAllEvents} from '../../helpers/api-util';
import {HeaderText} from '../../components';

const EventsPage = ({events}) =>{
  const router = useRouter();

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
        <EventList events={events}/>
      </Center>
    </>
  );
}

export const getStaticProps = async() =>{
  const events = await getAllEvents();
  return {
    props:{
      events:events
    },
    revalidate:60
  }
}

export default EventsPage;