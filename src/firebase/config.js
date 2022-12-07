// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkoCr9v4-1616KNRUqVz_YzjtmUfD7bHg',
  authDomain: 'draft-shop.firebaseapp.com',
  projectId: 'draft-shop',
  storageBucket: 'draft-shop.appspot.com',
  messagingSenderId: '705930229089',
  appId: '1:705930229089:web:d27ef0d6d966802e060120',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
