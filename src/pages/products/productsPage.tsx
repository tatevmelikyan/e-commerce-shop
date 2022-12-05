import { fetchProducts } from './productsPageSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'

import './styles.css'
const ProductsPage:React.FC = () => {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const productsStatus = useAppSelector((state) => state.products.status)
  const error = useAppSelector((state) => state.products.error)

  useEffect(() => {
    
      dispatch(fetchProducts(categoryId as string))
    
  }, [ dispatch, categoryId])  

  

  return (
    <div className='products-container'>
      {products.map((product) => {  
        console.log(product)      
        return (
          <div
            key={product.id}
            className='product'
            onClick={()=> navigate(`/products/${product.id}`)}
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
