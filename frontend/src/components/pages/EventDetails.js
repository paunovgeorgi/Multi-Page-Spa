import React, { Suspense } from 'react'
import { Await, redirect, useLoaderData, useRouteLoaderData} from 'react-router'
import EventItem from '../EventItem';
import EventsList from '../EventsList';

const EventDetails = () => {

  const {event, events} = useRouteLoaderData('event-detail');
  
  return (
    <>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventItem event={loadedEvent}/> }
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}/>}
      </Await>
    </Suspense>   
    </>
  )
}

export default EventDetails

async function loadEvent(id){
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({message: 'Count not fecth event!'}), {status: 500}); 
  }else{
    const resData = await response.json();
    return resData.event;
  }
}

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({message: 'Count not fetch events!'}),
     {status: 500});

  } else {
    const resData = await response.json();
    return resData.events;
  }
}


export async function loader({request, params}) {
  return {
    event: await loadEvent(params.eventId),
    events: loadEvents()
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