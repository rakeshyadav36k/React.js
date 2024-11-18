import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
function Layout() {// Home and footer component will not change while navigating from one page to another
  return (
    <>
      <Home />
      <Outlet />   
      <Footer />
    </>
  )
} 

export default Layout
