import React,{useState} from 'react'
import  AddProduct from './addProduct'
import SideBar from './adminSidebar/sideBar'
import './styles.css'

const AdminPage = () => {
  const [open, setOpen] = useState(false)
  const productHandler = () => {
    setOpen(!open)
  }
  return (
    <div>
      <SideBar/>
      {/* <button onClick={productHandler} >Add a product</button>
      {open && <AddProduct/>} */}
    </div>
  )
}

export default AdminPage