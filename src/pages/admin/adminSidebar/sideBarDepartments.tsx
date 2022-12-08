import React from 'react'
import '.././styles.css'
import { FaUser, FaBoxes, FaTruckLoading } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const SideBarDepartments = function () {
  const navigate = useNavigate()

  return (
    <div className='listedDeps'>
      <div className='items' onClick={()=>navigate('/account/admin/products')}>
        <div>
          <FaBoxes />
        </div>
        <div> Products </div>
      </div>
      <div className='items' onClick={()=>navigate('/account/admin/users')}>
        <div>
          <FaUser />
        </div>
        <div> Users</div>
      </div>
      <div className='items' onClick={()=>navigate('/account/admin/orders')}>
        <div>
          <FaTruckLoading />
        </div>
        <div>Orders</div>
      </div>
    </div>
  )
}
export default SideBarDepartments
