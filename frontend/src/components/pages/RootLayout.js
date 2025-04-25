import React from 'react'
import MainNavigation from '../MainNavigation'
import { Outlet, useNavigation } from 'react-router'

const RootLayout = () => {

  const navigation = useNavigation();


  return (
    <>
        <MainNavigation />
        {navigation.state === 'loading' && 'Loading...'}
        <Outlet />
    </>
  )
}

export default RootLayout