import {getFeaturedEvents} from '../dummy-data';
import {EventList, HeaderText} from '../components'; 
import { Center } from '@chakra-ui/layout';

const HomePage = () =>{

  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <HeaderText>Featured Events</HeaderText>
      <Center py={10}>
        <EventList events={featuredEvents}/>
      </Center>
    </>
  );
}
export default HomePage;