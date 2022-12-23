import { fetchProductsByCategory } from '../../features/slices/productsSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useParams } from 'react-router'
import { useEffect } from 'react'

import './styles.css'
import SortBy from './sortBy'
import ProductsUI from './productsUI'
import {Skeleton} from '../../features/skeletons'

const ProductsPage: React.FC = () => {
  const { categoryId } = useParams()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const productsStatus = useAppSelector((state) => state.products.status)
  const error = useAppSelector((state) => state.products.error)

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductsByCategory(categoryId))
    }
  }, [dispatch, categoryId])

  return (
    <div className='products-container'>
      <SortBy />
      {productsStatus===('loading'||'idle')?[...new Array(8)].map((e,ind)=><div className='product' key={ind}>
        <Skeleton/>
      </div>)
      :<ProductsUI products={products} />}
    </div>
  )
}

export default ProductsPage
