import React from 'react'
import EventForm from '../EventForm'
import { useLoaderData, useRouteLoaderData } from 'react-router'

const EditEvent = () => {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;

  return (
    <EventForm event={event}/>
  )
}

export default EditEvent

