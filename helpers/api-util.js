export const getAllEvents = async()=>{
 const response = await fetch("https://nextjs-course-6f943-default-rtdb.europe-west1.firebasedatabase.app/events.json");
 const data = await response.json();
 const events = [];

  for(const key in data){ 
    events.push({
      id:key,
      ...data[key]
    })
  }
  return events;
}

export const getFeaturedEvents = async()=>{
  const allEvents = await getAllEvents();
  return allEvents.filter(event=>event.isFeatured);
}

export const getEventById = async(id) => {
  const allEvents = await getAllEvents();
  return allEvents.find(event=>event.id === id);
}

export const getFilteredEvents = async(dateFilter)=>{
  const {month, year} = dateFilter;
  let filteredEvents = getAllEvents().filter(event=>{
    const eventDate = new Date(event.date);
    return eventDate.getFullYear === year && eventDate.getMonth() === month -1;
  })
  return filteredEvents;

}