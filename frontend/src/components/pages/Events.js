
import { useLoaderData, Await} from 'react-router';
import EventsList from '../EventsList';
import { Suspense } from 'react';

function Events() {
 
  const { events } = useLoaderData();


  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default Events;

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

export const loader = async () => {
   return {
    events: loadEvents()
   };

};