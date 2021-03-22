import { Center } from '@chakra-ui/layout';
import {useRouter} from 'next/router';
import { EventList, MessageBox } from '../../components';
import {getFilteredEvents} from '../../dummy-data';


const FilteredEventsPage = () =>{
  const router = useRouter();
  const filterData = router.query.slug;

  if(!filterData){
    return <p>Loading</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear =+ filteredYear;
  const numMonth =+ filteredMonth;

  if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 ){
    return <MessageBox>Invalid Filter. Please adjust your values</MessageBox>
  }

  const filteredEvents = getFilteredEvents({
    year:numYear,
    month:numMonth,
  });

  if(!filteredEvents || filteredEvents.length === 0){
    return <MessageBox>No events Found</MessageBox>
  }

  return (
    <Center>
      <EventList items={filteredEvents}/>
    </Center>
  )
}
export default FilteredEventsPage;