import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
import { useEffect, useState } from 'react'
import { fetchedProducts } from './productSlice'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import './styles.css'

const Products = function () {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.allProductsForAdmin.allProducts)

  useEffect(() => {
    dispatch(fetchedProducts())
    console.log(products)
  }, [])

  return (
    <div>
      <table className='productPage'>
        <tr>
          <th>PHOTO</th>
          <th>NAME</th>
          <th>IN STOCK</th>
          <th>PRICE</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
        <tbody>
          {products.length &&
            products.map((product) => {
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
                  <td className='icons'><FaEdit/></td>
                  <td className='icons'><MdDelete/></td>
                </tr>
              )
            })}
        </tbody>
      </table>
      {/* {products.length&&products.map(product=>{
        return <div key={product.id} className='products'>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.inStock}</div>
        </div>
      })} */}
    </div>
  )
}

export default Products
