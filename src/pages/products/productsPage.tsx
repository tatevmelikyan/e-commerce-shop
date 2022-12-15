import { fetchProducts } from '../../features/slices/productsSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useParams } from 'react-router'
import { useEffect } from 'react'

import './styles.css'
import SortBy from './sortBy'
import ProductsUI from './productsUI'

const ProductsPage: React.FC = () => {
  const { categoryId } = useParams()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const productsStatus = useAppSelector((state) => state.products.status)
  const error = useAppSelector((state) => state.products.error)

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProducts(categoryId))
    }
  }, [dispatch, categoryId])

  return (
    <div className='products-container'>
      <SortBy />
      <ProductsUI products={products} />
    </div>
  )
}

export default ProductsPage
