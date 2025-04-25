
import { useLoaderData} from 'react-router';
import EventsList from '../EventsList';

function Events() {
 
  const data = useLoaderData();
  const events = data.events;

  return (
      <EventsList events={events} />
  );
}

export default Events;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({message: 'Count not fetch events!'}),
     {status: 500});

  } else {
    return response;
  }
};