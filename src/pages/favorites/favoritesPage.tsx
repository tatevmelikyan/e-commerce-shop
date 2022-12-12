import React from 'react'
import { useState,useEffect } from 'react'
import { IProduct } from '../productPage/productPage'
import LikeIcon from './likeIcon'
import './styles.css'

const FavoritesPage = () => {

  const [favorites, setFavorites] = useState<IProduct[]>()

  useEffect(()=>{
    const json = localStorage.getItem('favorites')
    if (json){
      setFavorites(JSON.parse(json))
    } 
    
  },[])
  console.log(favorites);

  return (
    <div className='favoritePage'>
     <div className='favoriteHeader'>
      <h1 >Your Favorite Items</h1>
      <p>Item count: { favorites?.length}</p>
     </div>

    <div className='favoritesContainer'>
   
    {
      favorites?.map(item=> <div className='favoritePageItem' key={item.id}>
        <div >
          <img src={item.imageUrls[0]} alt="" className='itemImage'/>
         <div className='favoritePageLikeIcon'>
           <LikeIcon product={item}/>
         </div>
        </div>
        <p>{item.title}</p>
        <p>{item.price}</p>
         </div>)
    }
  </div>
</div>
    
  )
}

export default FavoritesPage