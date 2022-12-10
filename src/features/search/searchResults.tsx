import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getAllProducts } from '../../firebase/queries'
import { IProduct } from '../../pages/productPage/productPage'
import ProductsUI from '../../pages/products/productsUI'
import SortBy from '../../pages/products/sortBy'
import NoResults from './noResults'

const SearchResults: React.FC = () => {
  const { keyword } = useParams()

  const [matchedProducts, setMatchedProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getMatchedProducts()
  }, [keyword])

  const fetchAllProducts = async () => {
    const response = await getAllProducts()
    return response
  }

  const getMatchedProducts = () => {
    fetchAllProducts()
      .then((products) => {
        const matchedProducts = products.filter((product) => {
          if (keyword) {
            return product.title
              .replace(/\s/g, '')
              .toLowerCase()
              .includes(keyword.replace(/\s/g, '').toLowerCase())
          }
        })
        setMatchedProducts(matchedProducts)
      })
      .catch((err) => console.log(err))
  }

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
