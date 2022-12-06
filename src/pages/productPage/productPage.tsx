
import './product.css'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductById } from '../../firebase/queries';

export interface IProduct {
    categoryId:string;
    description:string;
    details:string[];
    id:string;
    imageUrls:string[];
    price:number;
    title:string;
    inStock:number;
}


const ProductPage:React.FC = () => {
    const{productId} = useParams()
    const [product,setProduct] = useState<IProduct>()

   useEffect( ()=>{
    async function fetch(){
        if(productId){
            const response =await getProductById(productId)
            setProduct(response?.data)
        }
    }
    fetch()
   },[productId])
  return (
    <div >
        <h2>{product?.title}</h2>
        <img className='productImg' src={product?.imageUrls[0]} alt="" />
    </div>
  )
}

export default ProductPage