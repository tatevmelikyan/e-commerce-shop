import React, { useState } from 'react'
import AddProduct from './pagesForAdmin/productPage/addProduct/addProduct'

import './styles.css'




const AdminPage = () => {
  const [open, setOpen] = useState(false)
  const productHandler = () => {
    setOpen(!open)
  }
  return (
    <div>
    
      
      <button className='addProductBot' onClick={productHandler} >Add a product</button>
      {open && <AddProduct open={open}setOpen={setOpen}/>}
    </div>
  )
}

export default AdminPage
