import { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
import CategoriesToFilter from './filterByCategory/categoriesToFilter'
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from '../../../../features/slices/productsSlice'
import { fetchedCategories } from '../../../../features/slices/categoriesSlice'
import { ZoomTheImgae } from './zoomTheImage/zoomTheImgae'
import { deleteProduct } from '../../../../firebase/queries'
import { EditProduct } from '../editProduct'
import './styles.css'
import AdminPage from '../../adminPage'
import { IProduct } from '../../../productPage/productPage'
const Products = function () {
  const products = useAppSelector((state) => state.products.products)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('All Products')
  const [zoomed, setZoomed] = useState(false)
  const [editedProduct, setEditedProduct] = useState<IProduct>()
  const [src, setSrc] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchedCategories())
  }, [])

  useEffect(() => {
    if (selected === 'All Products') {
      dispatch(fetchAllProducts())
    } else {
      dispatch(fetchProductsByCategory(selected))
    }
  }, [selected])

  const changeCategory = (category: string) => {
    setSelected(category)
  }
  const productHandler = () => {
    setOpen(!open)
  }
  
  

  return (
    <div>
      <div className='AdminPage'>
        <AdminPage />
      </div>
      <div>
        {zoomed && (
          <ZoomTheImgae
            imgUrl={src}
            zoomed={zoomed}
            setZoomed={setZoomed}
          />
        )}
      </div>

      <CategoriesToFilter
        selected={selected}
        changeCategory={changeCategory}
      />
      <table className='productPage'>
        <thead>
          <tr>
            <th>PHOTO</th>
            <th>NAME</th>
            <th>IN STOCK</th>
            <th>PRICE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product.id}>
                <td className='productTD'>
                  <img
                    className='photoInTable'
                    src={product.imageUrls[0]}
                    onClick={() => {
                      setZoomed(!zoomed)
                      setSrc(product.imageUrls[0])
                    }}
                  />
                </td>
                <td className='productTD'>{product.title}</td>
                <td className='productTD'>{product.inStock}</td>
                <td className='productTD'>{product.price}$</td>
                <td className='icons'>
                  <FaEdit
                    onClick={() => {
                      
                      
                      return productHandler(), setEditedProduct(product)
                    }}
                  />
                </td>
                <td className='icons'>
                  <MdDelete
                    onClick={() => {
                      deleteProduct(product.id)
                      dispatch(fetchAllProducts())
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {open && (
        <EditProduct
          editedProduct={editedProduct}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  )
}

export default Products
