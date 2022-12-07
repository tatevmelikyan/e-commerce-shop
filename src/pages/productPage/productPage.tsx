import './product.css'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductById } from '../../firebase/queries'
import { HiOutlineHeart } from 'react-icons/hi'

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
  const [heart,setHeart] = useState(false)

  useEffect(() => {
    async function fetch() {
      if (productId) {
        const response = await getProductById(productId)
        setProduct(response as IProduct)
      }
    }
    fetch()
  }, [productId])

  const handleFavoritIcon = () => {
    setHeart(!heart)
  }


  return (
    <>
      <h2 className='product-title'>{product?.title}</h2>
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
              <span className='products_icon_heart' onClick={handleFavoritIcon}>
                <HiOutlineHeart
                  stroke={!heart?'#d21414':'white'}
                  fill={!heart?'white':'#d21414'}
                />
              </span>
            </div>
          ))}
        </div>
        <div className='product_details_div'>
          <h2 className='product-title1'>{product?.title}</h2>
          <div className='product_details'>
            <span className='span-price'>$ {product?.price.toLocaleString()}</span>
            <p></p>
            <div>
              <button className='button-instock'>-</button>
              <span className='button-instock'>0</span>
              <button className='button-instock'>+</button>
            </div>
            <br />
            <button className='button-add-cart'>ADD CART</button>

            <p className='product-description'>
              <h3 className='product-details'>description</h3>
              {product?.description}
            </p>
            <p className='product-description'>
              <h3 className='product-details'>details</h3>
              {product?.details}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
