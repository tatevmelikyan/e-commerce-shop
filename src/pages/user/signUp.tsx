import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../../firebase/auth'
import './signUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')

  const handleCreateAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(password === confirmPassword) {
        createUser(email, password, name)
    }
  }

  return (
    <div className='sign-up-page'>
      <div className='sign-up-header'>
        <h2>Create Account</h2>
        By creating an account you are gonna be able to make orders and track your order history.
        Save your favorite items to your account.
        <div>
          Already have an account? <Link to='/account/signIn'>Sign In</Link>
        </div>
      </div>
      <div className='sign-up-form-container'>
        <form onSubmit={handleCreateAccount}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              id='confirmPassword'
              type='password'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
