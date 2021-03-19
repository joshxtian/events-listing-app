import {getFeaturedEvents} from '../dummy-data';
import {EventList} from '../components'; 
import { Center } from '@chakra-ui/layout';

const HomePage = () =>{

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <Center>
        <EventList events={featuredEvents}/>
      </Center>
      
    </div>
  );
}
export default HomePage;