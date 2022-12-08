import React from 'react'
import '.././styles.css'
import  SideBarDepartments  from './sideBarDepartments'
import {SlArrowRight} from 'react-icons/sl'


 const SideBar = function () {
  return (
    <div>
       <div className='arrow'><SlArrowRight/></div>
      <div className='sideNav'>
      <SideBarDepartments/>    
     </div>
      </div>  
  )
}

export default SideBar
