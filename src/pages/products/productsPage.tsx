import { fetchProductsByCategory } from '../../features/slices/productsSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import {SlArrowDown} from 'react-icons/sl'

import './styles.css'
import SortBy from './sortBy'
import ProductsUI from './productsUI'
import { LoadMoreBtn } from '../../features/loadMoreBtn/loadMoreBtn'

const ProductsPage: React.FC = () => {
  const [pages, setPages] = useState(8)
  const { categoryId } = useParams()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const productsStatus = useAppSelector((state) => state.products.status)
  const error = useAppSelector((state) => state.products.error)

  useEffect(() => {
    setPages(8)
  }, [categoryId])

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductsByCategory({ pages, categoryId }))
    }
  }, [dispatch, pages, categoryId])

  const handlePagination = () => {
    setPages(pages + 8)
  }
  return (
    <>
    <div className='products-container'>
      <SortBy />
      <ProductsUI products={products} />
    </div>
    <LoadMoreBtn handlePagination={handlePagination}/>
    </>
  )
}

export default ProductsPage
