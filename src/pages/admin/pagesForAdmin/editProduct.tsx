import React from 'react'
import {IoMdClose} from 'react-icons/io'

import { IOpen } from '../addProduct'

export const EditProduct = ({editedProduct, open,setOpen}:IOpen ) => {







  return (
   
    
    
    <div className='popUp'>
    <div className='container'>
    <i className='closeButtonDiv' onClick={()=>(setOpen(!open))}>
     <IoMdClose/>
    </i>
 
  
    {/* <div>
           
           <input
            value={editedProduct.categoryId }
              type='text'
              placeholder='categoryId'
              onChange={()=>{
                  console.log(1)
              }}
             
            />
  
            <input
              value={editedProduct.description}
              type='text'
              placeholder='description'
              onChange={()=>{
                  console.log(1)
              }}
             
            />
  
            <input
              value={editedProduct.details}
              type='text'
              placeholder='details'
              onChange={()=>{
                  console.log(1)
              }}
              
            />
  
            <input
            value={editedProduct.inStock}
              type='number'
              placeholder='inStock'
              onChange={()=>{
                  console.log(1)
              }}
             
            />
  
            <input
             value={editedProduct.price}
              type='number'
              placeholder='price'
              onChange={()=>{
                  console.log(1)
              }}
              
            />
  
            <input
            value={editedProduct.title}
              type='text'
              placeholder='title'
              onChange={()=>{
                  console.log(1)
              }}
              
            />
  
            <input
            
              type='file'
              multiple
              accept='image/*'
              onChange={()=>{
                  console.log(1)
              }}
           
            />
            <button type='submit'>Click</button>
           
           </div> */}
    </div>
 </div>
  )
}

