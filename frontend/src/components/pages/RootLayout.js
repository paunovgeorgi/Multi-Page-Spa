import React from 'react'
import MainNavigation from '../MainNavigation'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
        <MainNavigation />
        <Outlet />
    </>
  )
}

export default RootLayout