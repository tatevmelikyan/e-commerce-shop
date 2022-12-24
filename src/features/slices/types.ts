import { ICartItem } from './../../pages/cart/addToCart';
import { IProduct } from './../../pages/productPage/productPage';

interface ICustomerOrder {
    number: number;
    status: 'Order received' | 'Processed' | 'Shipped' | 'Delivered';
    date: string;
    subtotal: number;
    items: ICartItem[]
}

export interface IUser {
  uid: string;
  name: string;
  email: string;
  cartItems: ICartItem[];
  favoriteItems: IProduct[];
  addresses?: string[];
  orders?: ICustomerOrder[];
}


export interface IUserArgs {
  email: string,
  password: string,
  name: string
}

export type TUpdateCartAction = 'addToCart' | 'removeFromCart' | 'addQty' | 'removeQty' 
export type TUpdateFavoritesAction = 'like-dislike' | 'clearAll'