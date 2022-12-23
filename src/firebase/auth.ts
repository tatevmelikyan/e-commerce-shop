import { ICartItem } from './../pages/cart/addToCart';
import { IProduct } from './../pages/productPage/productPage';
import { IUser, TUpdateCartAction, TUpdateFavoritesAction } from './../features/slices/types';
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { db } from './config';

export const auth = getAuth()


const addUserToCollection = async(user: IUser) => {
    await setDoc(doc(db, 'users', user.uid), user) 
    const userRef = doc(db, 'users', user.uid)
    const userSnap = await getDoc(userRef)
    return { ...userSnap.data()}
  }
  
  
  
  const createNewUser = async(email: string, password: string, name: string, favoriteItems: IProduct[], cartItems: ICartItem[]) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      updateProfile(cred.user, {
        displayName: name,
      })
    return cred
  })
  .then((cred) => {
    const userData: IUser = {
        uid: cred.user.uid,
        name,
        email,
        favoriteItems,
        cartItems,
    }
return addUserToCollection(userData)
})
  }
  

  const getUserById = async(id: string) => {
    const userRef = doc(db, 'users', id)
    const userSnap = await getDoc(userRef)
    return userSnap.data() as IUser
  }


  const updateUserItems = async(id: string, favoriteItems: IProduct[], cartItems: ICartItem[]) => {
    const userRef = doc(db, 'users', id)
   const user = await getUserById(id)
   
   cartItems.forEach(item => {
   const userCartItem = user.cartItems.find(userItem => userItem.product.id === item.product.id )
   if(userCartItem) {
    userCartItem.qty += item.qty
   } else {
    user.cartItems.push(item)
   }
   })

   favoriteItems.forEach(item => {
    const userFavoriteItem = user.favoriteItems.find(userFavorite => userFavorite.id === item.id)
    if(!userFavoriteItem) {
        user.favoriteItems.push(item)
    }
   })

   await updateDoc(userRef, {
        favoriteItems: user.favoriteItems,
        cartItems: user.cartItems
    })
  }


  const signIn = async(email: string, password: string, favoriteItems: IProduct[], cartItems: ICartItem[]) => {
  const userCred = await signInWithEmailAndPassword(auth, email, password)
  await updateUserItems(userCred.user.uid, favoriteItems, cartItems)
    return await getUserById(userCred.user.uid) 
  }



  const updateUserFavorites = async(id: string, actionType: TUpdateFavoritesAction, likedItem: IProduct ) => {
    const userRef = doc(db, 'users', id)
    const user = await getUserById(id)
    switch(actionType) {
      case 'like-dislike': {
        const userFavoriteItem = user.favoriteItems.find(userFavorite => userFavorite.id === likedItem.id)
        if(userFavoriteItem) {
          user.favoriteItems = user.favoriteItems.filter(userFavorite => userFavorite.id !== likedItem.id)
        } else {
          user.favoriteItems.push(likedItem)
        }
      }
      break;
      case 'clearAll': {
        user.favoriteItems.length = 0
      }
    }
     await updateDoc(userRef, {
          favoriteItems: user.favoriteItems,
      })

      return await getUserById(id)
  }

  


  const updateUserCart = async(id: string, product: IProduct, actionType: TUpdateCartAction) => {
    const userRef = doc(db, 'users', id)
    const user = await getUserById(id)
    const userCartItem = user.cartItems.find(cartItem => cartItem.product.id === product.id)
    switch(actionType) {
      case 'addToCart': {
        if(userCartItem) {
          userCartItem.qty++
        } else {
          user.cartItems.push({product, qty: 1})
        }
      }
      break;
      case 'removeFromCart': {
        user.cartItems = user.cartItems.filter(userItem => userItem.product.id !== product.id)
      }
      break;
      case 'addQty': {
       if(userCartItem && userCartItem.product.inStock >= 1) {
        userCartItem.qty++
       }
      }
      break;
      case 'removeQty': {
        if(userCartItem && userCartItem.qty > 1) {
          userCartItem.qty--
        }
      }
    }
    await updateDoc(userRef, {
      cartItems: user.cartItems,
  })
  return await getUserById(id)
  }



export {createNewUser, signIn, getUserById, updateUserFavorites, updateUserCart}
