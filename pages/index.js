import {getFeaturedEvents} from '../helpers/api-util';
import {EventList, HeaderText} from '../components'; 
import { Center } from '@chakra-ui/layout';
import Head from 'next/head';
import NewsletterSignUp from '../components/input/NewsletterSignUp';

const HomePage = (props) =>{

  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Find alot of programming events"/>
      </Head>
      <HeaderText>Sign In To Stay Updated</HeaderText>
      <NewsletterSignUp/>
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