import React from 'react'
import { Routes } from 'react-router'
import Footer from '../footer/footer'
import Header from '../header/header'
import './styles.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='App-wrapper'>
      <Header />
      <div className='all-content'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
