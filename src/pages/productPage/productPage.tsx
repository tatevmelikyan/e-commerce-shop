// import { useEffect } from 'react';
// import { useParams } from 'react-router'
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { fetchProduct } from './productPageSlice';
import './product.css'

// const ProductPage: React.FC = () => {
//     const {productId} = useParams()
//   const dispatch = useAppDispatch()
//   const product = useAppSelector((state) => state.product.product)
//   const productsStatus = useAppSelector((state) => state.products.status)
// console.log(product, 'prod');

//   useEffect(() => {
    
//       dispatch(fetchProduct(productId as string))
    
//   }, [])
  
//   return (
//     <div>
//                 <img src={product.imageUrls[0]} alt="" />
//             </div>)
// }

// export default ProductPage


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

interface IProduct {
    categoryId:string;
    description:string;
    details:string;
    id:string;
    imageUrls:string[];
    price:{tag: string, numbers: number[]}
    title:string;
}


const productPage:React.FC = () => {
    const{productId} = useParams()
    const [product,setProduct] = useState<IProduct>()
   useEffect( ()=>{
    async function fetch(){
        const response =await axios.get(`http://localhost:4000/products/${productId}`)
        setProduct(response.data)
    }
    fetch()
   },[])
  return (
    <div >
        <h2>{product?.title}</h2>
        <img className='productImg' src={product?.imageUrls[0]} alt="" />
    </div>
  )
}

export default productPage