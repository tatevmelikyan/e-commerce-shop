import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getAllProducts } from '../../firebase/queries'
import { IProduct } from '../../pages/productPage/productPage'

const SearchResults = () => {
    const {keyword} = useParams()
    const dispatch = useAppDispatch()

    const [matchedProducts, setMatchedProducts] = useState<IProduct[]>([])
   

    const fetchAllProducts = async() => {
     const response = await getAllProducts()
     return response
    }

    const getMatchedProducts = () => {
         fetchAllProducts().then(products => {
          const matchedProducts = products.filter(product => {
                if(keyword) {
                    console.log('in if');
                    
                    return product.title.toLowerCase().includes(keyword.toLowerCase())
                }
            })
            console.log(matchedProducts, 'matched in func');
            setMatchedProducts(matchedProducts)
        }).catch(err => console.log(err))
    }

    
   
   useEffect(() => {
    getMatchedProducts()
   }, [])
   
   console.log(matchedProducts, 'matched products');
   

  return (
    <div>SearchResults</div>
  )
}

export default SearchResults