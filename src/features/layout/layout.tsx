import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'

interface LayoutProps {
    children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
