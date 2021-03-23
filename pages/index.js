import {getFeaturedEvents} from '../helpers/api-util';
import {EventList, HeaderText} from '../components'; 
import { Center } from '@chakra-ui/layout';

const HomePage = (props) =>{

  return (
    <>
      <HeaderText>Featured Events</HeaderText>

      <Center py={10}>
        <EventList events={props.events}/>
      </Center>
    </>
  );
}

export const getStaticProps = async() =>{
  const featuredEvents = await getFeaturedEvents();
  return {
    props:{
      events: featuredEvents
    },
    revalidate:1800
  }
}

export default HomePage;