import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
import { useEffect, useState } from 'react'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import './styles.css'
import CategoriesToFilter from './filterByCategory/categoriesToFilter'


import { fetchAllProducts, fetchProductsByCategory } from '../../../../features/slices/productsSlice'
import { fetchedCategories } from '../../../../features/slices/categoriesSlice'

const Products = function () {
  const products = useAppSelector(state => state.products.products)
  const [selected, setSelected] = useState('All Products')
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchedCategories())
  },[])
  

  useEffect(() => {
    if(selected === 'All Products') {
      console.log('in if');  
      dispatch(fetchAllProducts())
    } else {
      dispatch(fetchProductsByCategory(selected))
    }
  }, [selected])

  const changeCategory = (category: string) => {
    setSelected(category)
  }

  return (
    <div>
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
                  />
                </td>
                <td className='productTD'>{product.title}</td>
                <td className='productTD'>{product.inStock}</td>
                <td className='productTD'>{product.price}$</td>
                <td className='icons'>
                  <FaEdit />
                </td>
                <td className='icons'>
                  <MdDelete />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products
