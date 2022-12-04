import { fetchProducts } from './productsPageSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useParams } from 'react-router'
import { useEffect } from 'react'

import './styles.css'
const ProductsPage = () => {
  const { categoryId } = useParams()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const productsStatus = useAppSelector((state) => state.products.status)
  const eror = useAppSelector((state) => state.products.error)

  useEffect(() => {
    if (productsStatus === 'idle' || productsStatus === 'succeeded') {
      dispatch(fetchProducts(categoryId as string))
    }
  }, [productsStatus, dispatch, categoryId])

  return (
    <div className='products-container'>
      {products.map((product) => {        
        return (
          <div
            key={product.id}
            className='product'
          >
            <img
              src={product.imageUrls[0]}
            />
            <p className='product-title'>{product.title}</p>
            <p>{'$' + product.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsPage
