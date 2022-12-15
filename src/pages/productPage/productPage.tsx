import './product.css'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductById } from '../../firebase/queries'
import AddToCart from '../cart/addToCart'
import { useAppDispatch } from '../../app/hooks'
import { updateRecentlyViewedItems } from '../../features/recentlyViewed/recentlyViewedSlice'
import ProductPageCarusel from './productPageCarusel'
import { TransformWrapper,TransformComponent } from 'react-zoom-pan-pinch'


export interface IProduct {
  categoryId?: string
  description: string
  details: string[]
  id: string
  imageUrls: string[]
  price: number
  title: string
  inStock: number
}

const ProductPage: React.FC = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState<IProduct>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetch() {
      if (productId) {
        const response = await getProductById(productId)
        dispatch(updateRecentlyViewedItems(response as IProduct))
        setProduct(response as IProduct)
      }
    }
    fetch()
  }, [productId])

  return (
    <>
      <div className='product_info'>
        <div className='product_image_div'>
        
        <ProductPageCarusel slideContent={product as IProduct}/>
       
           </div>
        <div className='product_details_div'>
          <h2 className='product-title1'>{product?.title}</h2>
          <div className='product_details'>
            <span className='span-price'>$ {product?.price.toLocaleString()}</span>
            <p></p>
            <AddToCart product={product as IProduct} />

            <p className='product-details'>Description</p>
            <p className='product-discription-text'>{product?.description}</p>
            <p className='product-details'>Details</p>
            <p className='product-details-text'>
              {product?.details.map((detail) => (
                <li
                  key={Math.random()}
                  className='details-arr'
                >
                  {detail}
                </li>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
