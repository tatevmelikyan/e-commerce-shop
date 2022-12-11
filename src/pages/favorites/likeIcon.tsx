import React, { FC, useState, useEffect } from 'react'
import { HiOutlineHeart } from 'react-icons/hi'
import { IProduct } from '../productPage/productPage'

const LikeIcon: FC<{ product: IProduct }> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false)

  const getLikedProducts = () => {
    const favorites = localStorage.getItem('favorites')
    let favoritesArr: IProduct[] = []

    if (favorites) {
      favoritesArr = JSON.parse(favorites)
    }
    const isProductLiked = favoritesArr.find((item: IProduct) => item.id === product?.id)
      ? true
      : false

    return {
      isProductLiked,
      favoritesArr,
    }
  }

  const handleFavoritIcon = () => {
    setIsLiked(!isLiked)

    const { isProductLiked, favoritesArr } = getLikedProducts()

    let filteredFavoriteArr: IProduct[] = []
    if (isProductLiked) {
      filteredFavoriteArr = favoritesArr.filter((item: IProduct) => item.id !== product?.id)
      localStorage.setItem('favorites', JSON.stringify(filteredFavoriteArr))
    } else {
      favoritesArr.push(product as IProduct)
      localStorage.setItem('favorites', JSON.stringify(favoritesArr))
    }
  }

  useEffect(() => {
    const { isProductLiked } = getLikedProducts()
    if (isProductLiked) {
      setIsLiked(true)
    }
  }, [])

  return (
    <span
      className='products_icon_heart'
      onClick={handleFavoritIcon}
    >
      <HiOutlineHeart
        stroke='#d21414'
        fill={!isLiked ? 'white' : '#d21414'}
      />
    </span>
  )
}

export default LikeIcon
