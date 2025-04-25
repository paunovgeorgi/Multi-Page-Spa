import React from 'react'
import { useLoaderData} from 'react-router-dom'
import EventItem from '../EventItem';

const EventDetails = () => {

  const data = useLoaderData();
  const event = data.event;
  

  return (
    <>
      <EventItem event={event}/> 
    </>
  )
}

export default EventDetails

export async function loader({request, params}) {

  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({message: 'Count not fecth event!'}), {status: 500}); 
  }else{
    return response;
  }
}