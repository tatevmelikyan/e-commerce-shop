import React from 'react'
import { deleteProduct, postProducts, editProducts } from '../../firebase/queries'
import './styles.css'
import '../admin/pagesForAdmin/productPage/zoomTheImage/zoomTheImgae'
import { IoMdClose } from 'react-icons/io'
import { useState, useEffect } from 'react'
import type { BaseSyntheticEvent } from 'react'


interface Event<T = EventTarget> {
  target: T
  
} 
export interface IOpen {
  editedProduct?: any
  
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function AddProduct({ open, setOpen }: IOpen) {
  const [images, setImages] = useState([])
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [categoryId, setKategoryId] = useState('')
  const [description, setDescription] = useState('')
  const [details, setDetails] = useState<string[]>([])
  const [inStock, setInstock] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [title, setTitle] = useState('')
  const objectModel = {
    categoryId: categoryId,
    description: description,
    details: details,
    inStock: +inStock,
    price: +price,
    title: title,
    imageUrls: imageUrls,
  }
  useEffect(() => {
    if (images.length < 1) return

    const newImageUrls: string[] = []

    for (const [key, value] of Object.entries(images)) {
      newImageUrls.push(URL.createObjectURL(value))
    }

    setImageUrls(newImageUrls)
  }, [images])

  function onImageChange(e: BaseSyntheticEvent) {
    setImages(e.target.files)
  }
  const addCategoryId = (e: Event<HTMLInputElement>) => {
    setKategoryId(e.target.value)
  }
  const addDescription = (e: Event<HTMLInputElement>) => {
    setDescription(e.target.value)
  }
  const addDetailes = (e: Event<HTMLInputElement>) => {
    setDetails([e.target.value])
  }
  const addInstock = (e: Event<HTMLInputElement>) => {
    setInstock((e.target as any).value as number)
  }
  const addPrice = (e: Event<HTMLInputElement>) => {
    setPrice((e.target as any).value as number)
  }
  const addTitle = (e: Event<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const stateValues = () => {
    return Object.values(objectModel).every((el) => Boolean(el) === true)
  }

  const post = async () => {
    // @ts-ignore
    await postProducts(objectModel)
  }
  

  return (
    <div className='popUp'>
      <div className='container'>
        <i
          className='closeButtonDiv'
          onClick={() => {
            setOpen(!open)
          }}
        >
          <IoMdClose />
        </i>

        <div className='inputContainer'>
          <input
            type='text'
            placeholder='categoryId'
            onChange={addCategoryId}
          />

          <input
            value={description}
            type='text'
            placeholder='description'
            onChange={addDescription}
          />

          <input
            value={details}
            type='text'
            placeholder='details'
            onChange={addDetailes}
          />

          <input
            type='number'
            placeholder='inStock'
            onChange={addInstock}
          />

          <input
            type='number'
            placeholder='price'
            onChange={addPrice}
          />

          <input
            type='text'
            placeholder='title'
            onChange={addTitle}
          />

          <input
            type='file'
            multiple
            accept=' image/*'
            onChange={onImageChange}
          />
           <div
                className='divImage'
                
              >
          {imageUrls.map((image) => {
            console.log(imageUrls);
            
            return (
             
                <img key={image}
                  className='image'
                  src={image}
                />
             
            )
          })}
           </div>

         
        </div>
        <button
          className='addBooton'
            onClick={() => {
              stateValues()
                ? (post(), setOpen(!open), alert('Successfully added product'))
                : alert('invalid input')
            }}
          >
            add posts
          </button>
      </div>
    </div>
  )
}

