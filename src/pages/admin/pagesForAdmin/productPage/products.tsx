import { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
import CategoriesToFilter from './filterByCategory/categoriesToFilter'
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from '../../../../features/slices/productsSlice'
import { fetchedCategories } from '../../../../features/slices/categoriesSlice'
import { ZoomTheImgae } from './zoomTheImage/zoomTheImgae'
import { LoadMoreBtn } from '../../../../features/loadMoreBtn/loadMoreBtn'

import './styles.css'

const Products = function () {
  const products = useAppSelector((state) => state.products.products)
  const needLoad = useAppSelector((state) => state.products.needLoad)
  const [categoryId, setSelected] = useState('All Products')
  const [zoomed, setZoomed] = useState(false)
  const [pages, setPages] = useState(10)
  const [src, setSrc] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchedCategories())
    console.log(products, 'products')
  }, [])

  useEffect(() => {
    if (categoryId === 'All Products') {
      console.log('in if')
      dispatch(fetchAllProducts(pages))
    } else {
      dispatch(fetchProductsByCategory({ pages, categoryId }))
    }
  }, [categoryId, pages])

  const changeCategory = (category: string) => {
    setSelected(category)
    setPages(10)
  }
  const handlePages = () => {
    setPages(pages + 10)
  }

  return (
    <div>
      <div>
        {zoomed && (
          <ZoomTheImgae
            imgUrl={src}
            zoomed={zoomed}
            setZoomed={setZoomed}
          />
        )}
      </div>
      <CategoriesToFilter
        selected={categoryId}
        changeCategory={changeCategory}
      />
      <table className='productPage'>
        <thead>
          <tr>
            <th>PHOTO</th>
            <th>NAME</th>
            <th>IN STOCK</th>
            <th>PRICE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product.id}>
                <td className='productTD'>
                  <img
                    className='photoInTable'
                    src={product.imageUrls[0]}
                    onClick={() => {
                      setZoomed(!zoomed)
                      setSrc(product.imageUrls[0])
                    }}
                  />
                </td>
                <td className='productTD'>{product.title}</td>
                <td className='productTD'>{product.inStock}</td>
                <td className='productTD'>{product.price}$</td>
                <td className='icons'>
                  <FaEdit />
                </td>
                <td className='icons'>
                  <MdDelete />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {needLoad && <LoadMoreBtn handlePagination={handlePages} />}
    </div>
  )
}

export default Products
