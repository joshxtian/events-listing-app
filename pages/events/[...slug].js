import { Box, Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useRouter } from "next/router";
import useSWR from "swr";
import { EventList, MessageBox } from "../../components";
import { getFilteredEvents } from "../../dummy-data";
import { useEffect, useState } from "react";
import Head from "next/head";

const FilteredEventsPage = () => {
  const router = useRouter();
  const [foundEvents, setFoundEvents] = useState();
  const filterData = router.query.slug;
  const { data, error } = useSWR(
    "https://nextjs-course-6f943-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setFoundEvents(events);
    }
  }, [data]);

 

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        description={`A list of filtered events`}
      />
    </Head>
  );

  if (!foundEvents) {
    return (
      <>
        {pageHeadData}
        <Center>
          <Box h={"100vh"} display="flex" alignItems="center">
            <Spinner size="xl" />
          </Box>
        </Center>
      </>
    );
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        description={`All events for ${(numYear, numMonth)}`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
        <>
          {pageHeadData}
          <p>Invalid filter please check you info</p>
        </>
       
      );
  }

  const filteredEvents = foundEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter</p>;
  }

  const date = new Date(numYear, numMonth);

  return (
    <>
      <Center>
        <EventList events={filteredEvents} />
      </Center>
    </>
  );
};

export default FilteredEventsPage;
