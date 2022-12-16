import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { fetchedProducts } from './productSlice'
import CategoriesToFilter from './filterByCategory/categoriesToFilter'
import { filterCategory } from './productSlice'

import './styles.css'


const Products = function () {
  const products = useAppSelector((state) => state.allProductsForAdmin.allProducts)
  const [selected, setSelected] = useState('All Products')
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (selected === 'All Products') {
      dispatch(fetchedProducts())
    } else {
      dispatch(filterCategory(selected))
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
