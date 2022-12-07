import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
const LoginPage = () => {
  return (
    <div>
      <Login />
      <p>
        Or <Link to='/register'>register</Link>
      </p>
    </div>
  )
}

export default LoginPage
