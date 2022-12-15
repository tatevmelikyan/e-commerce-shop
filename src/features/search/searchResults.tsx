import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchAllProducts } from '../slices/productsSlice'
import ProductsUI from '../../pages/products/productsUI'
import SortBy from '../../pages/products/sortBy'
import NoResults from './noResults'

const SearchResults: React.FC = () => {
  const { keyword } = useParams()
  const dispatch = useAppDispatch()
  const matchedProducts = useAppSelector((state) => state.products.products)

  useEffect(() => {
    if (keyword) {
      dispatch(fetchAllProducts(keyword))
    }
  }, [keyword])

  return (
    <div className='search-results'>
      {matchedProducts.length ? (
        <>
          <div className='search-result-heading'>
            <h2>{`${matchedProducts.length} search results for “${keyword}”`}</h2>
          </div>
          <div className='searched-products'>
            <SortBy />
            <ProductsUI products={matchedProducts} />
          </div>
        </>
      ) : (
        <NoResults keyword={keyword as string} />
      )}
    </div>
  )
}

export default SearchResults
