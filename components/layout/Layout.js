import React from 'react'
import Navbar from '../module/Navbar'
import Head from 'next/head'
import Footer from '../module/Footer'

const Layout = ({children, title}) => {
  return (
    <>
    <Head>
        <title>{title || 'tokoku'}</title>
    </Head>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout