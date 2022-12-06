import { fetchProducts, IPayload } from './productsPageSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import {ImHeart} from 'react-icons/im'
import { sortByPrice } from './productsPageSlice'

import './styles.css'
const ProductsPage:React.FC = () => {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const productsStatus = useAppSelector((state) => state.products.status)
  const error = useAppSelector((state) => state.products.error)

  const options = [
    {value: categoryId, text: 'Featured'},
    {value: 'Price, low to high', text: 'Price, low to high'},
    {value: 'Price, high to low', text: 'Price, high to low'},
  ];


  const  [sortOrder,setSortOrder] = useState()

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {

    setSelected(event.target.value);
   
  };

  useEffect(()=>{
    dispatch(sortByPrice(selected))
  },[selected])

  useEffect(()=>{

      dispatch(fetchProducts({categoryId} as IPayload))

  },[dispatch,categoryId])

 

  return (
    <div className='products-container'>
      <div className='sortByPrice'>
        <label htmlFor="sort">
        <span>Sort By </span>
        <select name="" id="sort" value={selected} onChange={handleChange}>
         {
           options.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))
         }
        </select>
        </label>
        </div>
      {products?.map((product) => { 
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
