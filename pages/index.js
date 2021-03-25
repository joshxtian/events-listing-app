import {getFeaturedEvents} from '../helpers/api-util';
import {EventList, HeaderText} from '../components'; 
import { Center } from '@chakra-ui/layout';
import Head from 'next/head';

const HomePage = (props) =>{

  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Find alot of programming events"/>
      </Head>
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