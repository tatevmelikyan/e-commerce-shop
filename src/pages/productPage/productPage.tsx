
import './product.css'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductById } from '../../firebase/queries';

export interface IProduct {
    categoryId?:string;
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
            setProduct(response as IProduct)
        }
    }
    fetch()
   },[productId])
   console.log(product);
   
  return (
    <>
           <h2>{product?.title}</h2>
           <div className='product_info'>
           <div className='product_image_div'>
            {
                product?.imageUrls.map(img=><div className='imageContainer' key={img}>
                    <img className='productImage' src={img} alt="" />
                </div>)
            }
           {/* <img className='productImg' src={product?.imageUrls[0]} alt="" /> */}
        </div>
        <div>
        <div className='product_details'>
            <h2>{product?.title}</h2>
            <span>{product?.price}</span>
            <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </div>
            <button>ADD CART</button>
            <p>{product?.description}</p>
            <p>{product?.details}</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default ProductPage