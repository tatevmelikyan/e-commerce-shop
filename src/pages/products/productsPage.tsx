import { fetchProductsByCategory } from '../../features/slices/productsSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

import './styles.css'
import SortBy from './sortBy'
import ProductsUI from './productsUI'

const ProductsPage: React.FC = () => {
  const [pages,setPages] = useState(12)
  const { categoryId } = useParams()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const productsStatus = useAppSelector((state) => state.products.status)
  const error = useAppSelector((state) => state.products.error)

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductsByCategory({pages,categoryId}))
    }
  }, [dispatch,pages, categoryId])

  const handlePagination = () => {
    setPages(pages+12)
  }
  return (
    <div className='products-container'>
      <SortBy />
      <ProductsUI products={products} />
      <div>
        <button onClick={handlePagination}>Load more</button>
      </div>
    </div>
  )
}

export default ProductsPage
