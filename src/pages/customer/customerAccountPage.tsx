import { onAuthStateChanged } from 'firebase/auth'
import React, {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCurrentUser } from '../../features/slices/currentUserSlice'
import { auth } from '../../firebase/auth'

const CustomerAccountPage = () => {
const currentUser = useAppSelector(state => state.currentUser)

// console.log(currentUser, 'user in store');
  
  return (
    <div>Welcome {currentUser.name}</div>
  )
}

export default CustomerAccountPage