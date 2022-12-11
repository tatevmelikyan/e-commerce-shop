import './product.css'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductById } from '../../firebase/queries'
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl'
import LikeIcon from '../favorites/likeIcon'

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
  
  
  useEffect(() => {
    async function fetch() {
      if (productId) {
        const response = await getProductById(productId)
        setProduct(response as IProduct)
      }
    }
    fetch()
  }, [productId])

  return (
    <>
      <div className='product_info'>
        <div className='product_image_div'>
          {product?.imageUrls.map((img) => (
            <div
              className='imageContainer'
              key={img}
            >
              <img
                className='productImage'
                src={img}
                alt=''
              />
              <LikeIcon product={product}/>
            </div>
          ))}
        </div>
        <div className='product_details_div'>
          <h2 className='product-title1'>{product?.title}</h2>
          <div className='product_details'>
            <span className='span-price'>$ {product?.price.toLocaleString()}</span>
            <p></p>
            <div className='instoct-container'>
              <button className='button-instock'>{<SlArrowLeft />}</button>
              <span className='span-instock'>0</span>
              <button className='button-instock'>{<SlArrowRight />}</button>
            </div>
            <br />
            <div className='add-cart-div'>
              <button className='button-add-cart'>ADD TO CART</button>
            </div>

            <p className='product-description'>
              <h3 className='product-details'>description</h3>
              {product?.description}
            </p>
            <p className='product-description'>
              <h3 className='product-details'>details</h3>
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
