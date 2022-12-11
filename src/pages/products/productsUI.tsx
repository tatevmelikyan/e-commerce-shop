import React from 'react'
import { IProduct } from '../productPage/productPage'
import { HiOutlineHeart } from 'react-icons/hi'
import { useNavigate } from 'react-router'

const ProductsUI: React.FC<{ products: IProduct[] }> = ({ products }) => {
  const navigate = useNavigate()

  return (
    <>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className='product'
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <div className='products_images_div'>
              <img
                className='products_images'
                src={product.imageUrls[0]}
              />
              <span className='products_icon_heart'>
                <HiOutlineHeart
                  stroke='#d21414'
                  fill='white'
                />
              </span>
            </div>
            <div>
              <p className='product-title'>{product.title}</p>
              <p>{'$' + product.price}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductsUI
