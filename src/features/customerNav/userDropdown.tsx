import React from 'react'
import './userDropdown.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/auth'



const UserDropdown = () => {
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('user signed out');
        })
        .catch(err => {
            console.log(err);  
        })
    } 
  return (
    <div className='user-dropdown'>
        <div><button onClick={handleSignOut}>Sign Out</button></div>
        </div>
  )
}

export default UserDropdown