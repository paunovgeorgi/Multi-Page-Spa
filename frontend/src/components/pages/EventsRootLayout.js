import React from 'react'
import EventsNavigation from '../EventsNavigation'
import { Outlet } from 'react-router'

const EventsRootLayout = () => {
  return (
    <>
        <EventsNavigation />
        <Outlet />
    </>
  )
}

export default EventsRootLayout