import { onAuthStateChanged } from 'firebase/auth'
import React, {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCurrentUser } from '../../features/slices/currentUserSlice'
import { auth } from '../../firebase/auth'

const CustomerAccountPage = () => {
const currentUser = useAppSelector(state => state.currentUser)
const dispatch = useAppDispatch()
const [name, setName] = useState('')


useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      dispatch(setCurrentUser({name: user.displayName, email: user.email}))
      if(user.displayName) {
        setName(user.displayName)
      }
      
    } else {
      console.log('no user :');
      
    }
  })
}, [])

console.log(currentUser, 'user in store');
  
  return (
    <div>Welcome {name}</div>
  )
}

export default CustomerAccountPage