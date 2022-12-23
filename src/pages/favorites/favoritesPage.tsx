import React from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ProductsUI from '../products/productsUI'
import { getLikedProducts, clearLikedItems } from '../../features/slices/favoritesSlice'
import NoFavorites from './noFavorites'
import './styles.css'
import './favoritesMedia.css'

const FavoritesPage = () => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector((state) => state.favoriteItems.favoriteItems)

  useEffect(() => {
    dispatch(getLikedProducts())
  }, [])

  return (
    <>
    {
       favorites.length?
       <div className='favoritePage'>
       <div className='favoriteHeader'>
       <h1 className='favorites-h1'>Your Favorite Items</h1>
       <div className= 'clearFavoritesContainer'>
        <button onClick={()=>dispatch(clearLikedItems())}>Clear All Favorites</button>
       </div>
       <p>Item count: { favorites?.length}</p> 
      </div>
      <div className='favoritesContainer'>
      <ProductsUI products={favorites}/>
      </div>
      </div>
      :
      <NoFavorites/>
    }
    </>
  )
}

export default FavoritesPage
