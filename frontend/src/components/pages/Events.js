import React, { useEffect, useState } from 'react'
import EventItem from '../EventItem'
import { Link } from 'react-router'

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'My First Event',
    description: 'this is my first event ever',
    image: 'no image available',
    date: 'the best date mate'
  },
  {
    id: 'e2',
    title: 'My Second Event',
    description: 'this is my second event ever',
    image: 'no image available',
    date: 'the bes second date mate'
  },

]

const Events = () => {



  return (
    <div>
    <h1>Events</h1>
    <ul>
      {DUMMY_EVENTS.map((event) => 
      <li key={event.id}>
        <Link to={event.id}>{event.title}</Link>
      </li>
      )}
    </ul>
    </div>
  )
}

export default Events