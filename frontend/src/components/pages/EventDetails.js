import React from 'react'
import { redirect, useLoaderData, useRouteLoaderData} from 'react-router'
import EventItem from '../EventItem';

const EventDetails = () => {

  const data = useRouteLoaderData('event-detail');
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

export async function action({request, params}){
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({message: 'Count not delete event.'}), {status: 500}); 
  }

  return redirect('/events');  
}