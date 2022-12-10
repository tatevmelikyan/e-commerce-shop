import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import './styles.css'
import SideBar from '../../pages/admin/adminSidebar/sideBar'
import Carousel from '../carousel/carousel'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='App-wrapper'>
      <Header />
      {/* <SideBar/> */}
      <div className='all-content'>{children}</div>
      <Carousel slideContent={[]} />
      <Footer />
    </div>
  )
}

export default Layout
