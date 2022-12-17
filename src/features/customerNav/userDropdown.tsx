import React from 'react'
import './userDropdown.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/auth'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { removeCurrentUser } from '../slices/currentUserSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'



const UserDropdown = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const currentUser = useAppSelector(state => state.currentUser)


    const handleSignIn = () => {
        navigate('/account/signIn')
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('user signed out')
            dispatch(removeCurrentUser())
            navigate('/account/signOut')
        })
        .catch(err => {
            toast.error(err.message)  
        })
    } 
  return (
    <div className='user-dropdown'>
        <div>
            {currentUser.id ? <button onClick={handleSignOut}>Sign Out</button> 
            :
            <button onClick={handleSignIn}>Sign In/Create Account</button>
            }
            
            </div>
        </div>
  )
}

export default UserDropdown