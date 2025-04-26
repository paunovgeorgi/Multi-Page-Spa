import React from 'react'
import EventForm from '../EventForm'
import { redirect } from 'react-router'

const NewEvent = () => {
  return (
    <EventForm method='POST'/>
  )
}

export default NewEvent

// export async function action({request, params}){

//   const data = await request.formData();
//   console.log(data);
  
//   const eventData = {
//     title: data.get('title'), 
//     image: data.get('image'),
//     date: data.get('date'),
//     description: data.get('description')
//   };

//   const response = await fetch('http://localhost:8080/events', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(eventData)
//   });

//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     throw new Response(JSON.stringify({message: 'Failed to save event!'}), {status: 500});
//   }

//   return redirect('/events');
// }