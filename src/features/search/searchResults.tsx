import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchProductsForSearch } from '../slices/productsSlice'
import ProductsUI from '../../pages/products/productsUI'
import SortBy from '../../pages/products/sortBy'
import { LoadMoreBtn } from '../loadMoreBtn/loadMoreBtn'
import NoResults from './noResults'

const SearchResults: React.FC = () => {
  const [pages, setPages] = useState(16)
  const { keyword } = useParams()
  const dispatch = useAppDispatch()
  const matchedProducts = useAppSelector((state) => state.products.products)
  const matchedProductsCount = useAppSelector((state) => state.products.mathedProductsCount)
  const needLoad = useAppSelector((state) => state.products.needLoad)

  useEffect(() => {
    if (keyword) {
      dispatch(fetchProductsForSearch({ pages, keyword }))
    }
  }, [keyword, pages])
  const handlePagination = () => {
    setPages(pages + 16)
  }

  return (
    <div className='search-results'>
      {matchedProducts.length ? (
        <>
          <div className='search-result-heading'>
            <h2>{`${matchedProductsCount} search results for “${keyword}”`}</h2>
          </div>
          <div className='searched-products'>
            <SortBy />
            <ProductsUI products={matchedProducts} />
          </div>
        </>
      ) : (
        <NoResults keyword={keyword as string} />
      )}
      {needLoad && <LoadMoreBtn handlePagination={handlePagination} />}
    </div>
  )
}

export default SearchResults
