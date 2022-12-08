import React, { useState } from 'react'
import '.././styles.css'
import { SideBarDepartments } from './sideBarDepartments'
import {SlArrowRight} from 'react-icons/sl'


export const SideBar = () => {
  const [isMouseOn,setIsMouseOn] = useState(false)
  return (
    <div>
       <div className='arrow'><SlArrowRight/></div>
      <div className='sideNav' onMouseLeave={()=>setIsMouseOn(false)}>
      <SideBarDepartments/>    
     </div>
      </div>  
  )
}
