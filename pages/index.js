import {getFeaturedEvents} from '../dummy-data';
import {EventList} from '../components'; 
import { Center } from '@chakra-ui/layout';

const HomePage = () =>{

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Center py={10}>
        <EventList events={featuredEvents}/>
      </Center>
    </div>
  );
}
export default HomePage;