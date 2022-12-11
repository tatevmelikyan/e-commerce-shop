import { fetchProducts } from './productsPageSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { HiOutlineHeart } from 'react-icons/hi'
import { sortByPrice } from './productsPageSlice'

import './styles.css'
import LikeIcon from '../favorites/likeIcon'

interface IOrderOption {
  value: TOrder
  text: 'Featured' | 'Price, low to high' | 'Price, high to low'
}

export type TOrder = 'featured' | 'asc' | 'desc'

const ProductsPage: React.FC = () => {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const productsStatus = useAppSelector((state) => state.products.status)
  const error = useAppSelector((state) => state.products.error)

  const orderOptions: IOrderOption[] = [
    { value: 'featured', text: 'Featured' },
    { value: 'asc', text: 'Price, low to high' },
    { value: 'desc', text: 'Price, high to low' },
  ]

  const [selected, setSelected] = useState<TOrder>('featured')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value as TOrder)
  }

  useEffect(() => {
    dispatch(sortByPrice(selected))
  }, [selected])

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProducts(categoryId))
    }
  }, [dispatch, categoryId])

  return (
    <div className='products-container'>
      <div className='sortByPrice'>
        <label htmlFor='sort'>
          <span>Sort By </span>
          <select
            name=''
            id='sort'
            value={selected}
            onChange={handleChange}
          >
            {orderOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            ))}
          </select>
        </label>
      </div>
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
             <LikeIcon product={product}/>
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
