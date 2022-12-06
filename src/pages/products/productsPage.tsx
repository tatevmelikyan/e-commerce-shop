import { fetchProducts } from './productsPageSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'
import {ImHeart} from 'react-icons/im'

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
      <div className='sortByPrice'>
        <label htmlFor="sort">
        <span>Sort By </span>
        <select name="" id="sort" defaultValue='Featured'>
          <option value="Price,low to high">Price,low to high</option>
          <option value="Price, high to low">Price, high to low</option>
          <option value="Featured">Featured</option>
        </select>
        </label>
        </div>
      {products.map((product) => { 
        return (
          <div
            key={product.id}
            className='product'
            onClick={()=> navigate(`/products/${product.id}`)}
          >
            <div className='products_images_div'>
            <img
             className='producs_images'
              src={product.imageUrls[0]}
            />
            <span className='products_icon_hert'>
               <ImHeart className='hh'/>
            </span>
            </div>
           <div>
             <p className='product-title'>{product.title}</p>
             <p>{'$' + product.price}</p>
           </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsPage
