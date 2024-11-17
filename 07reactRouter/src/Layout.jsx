import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
function Layout() {
  return (
    <>
      <Home />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
