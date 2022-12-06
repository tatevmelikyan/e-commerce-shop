import React from 'react'
import {SignUp} from '../components/SignUp'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>     <h1>Register</h1>
    <SignUp />
    <p>
        Already have an account? <Link to="/">Sign in</Link>   
    </p>   </div>
  )
}

export default RegisterPage