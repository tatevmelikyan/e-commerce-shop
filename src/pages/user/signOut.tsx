import React from 'react'
import { Link } from 'react-router-dom'

const SignOut = () => {
  return (
    <div>
        <span>You have signed out of your account. We look forward to your next visit.</span>
        <Link to='/account/signIn'>SIGN IN</Link>
        <Link to='/'>CONTINUE SHOPPING</Link>
    </div>
  )
}

export default SignOut