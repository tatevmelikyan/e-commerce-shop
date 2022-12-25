import { ICartItem } from './../../pages/cart/addToCart';
import { IProduct } from './../../pages/productPage/productPage';
export interface IUser {
  uid: string
  name: string
  email: string
  addresses?: string[]
  cartItems: ICartItem[]
  favoriteItems: IProduct[]
}


export interface IUserArgs {
  email: string,
  password: string,
  name: string
}

export type TUpdateCartAction = 'addToCart' | 'removeFromCart' | 'addQty' | 'removeQty' 
export type TUpdateFavoritesAction = 'like-dislike' | 'clearAll'