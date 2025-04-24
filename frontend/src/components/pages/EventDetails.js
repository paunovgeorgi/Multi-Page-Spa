import React from 'react'
import { useParams } from 'react-router'

const EventDetails = () => {

  const params = useParams();

  return (
    <>
      <h1>EventDetails</h1>
      <h2>{params.eventId}</h2>
    </>
  )
}

export default EventDetails