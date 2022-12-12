import React from 'react'
import { useState,useEffect } from 'react'
import { IProduct } from '../productPage/productPage'

const FavoritesPage = () => {

  const [favorites, setFavorites] = useState<IProduct[]>()

  useEffect(()=>{
    const json = localStorage.getItem('favorites')
    if (json){
      setFavorites(JSON.parse(json))
    }
    console.log(favorites);
    
  },[])

  return (
    <div>FavoritesPage</div>
  )
}

export default FavoritesPage