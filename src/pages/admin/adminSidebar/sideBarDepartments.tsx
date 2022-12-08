import React from 'react'
import '.././styles.css'
import {FaUser,FaBoxes,FaTruckLoading} from 'react-icons/fa'

const SideBarDepartments = function () {
  return (
    <div className='listedDeps'>
        <div className='items'>
           <div><FaBoxes/></div>
           <div>Products</div>
        </div>
        <div className='items'>
             <div><FaUser/></div>
          <div> Users</div>
        </div>
        <div className='items'>
          <div><FaTruckLoading/></div>
          <div>Orders</div>
          </div>
    </div>
  )
}
export default SideBarDepartments
