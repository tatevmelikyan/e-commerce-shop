import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/auth'
import './styles.css'
import LoadingPage from '../loading/loadingPage'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '../../app/hooks'
import { setCurrentUser } from '../../features/slices/currentUserSlice'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()


  const handleCreateAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(password === confirmPassword) {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
          updateProfile(cred.user, {
              displayName: name
          })
          .then(() => {
            setIsLoading(false)
              navigate('/account')
          })
          .catch(err => {
            toast.error(err.message)
            setIsLoading(false)
          })
      })
      .catch(err => {
          toast.error(err.message)
          setIsLoading(false)
      })
    } else {
    toast.error('Passwords don\'t match.')
    }
  }

  return (
     <div className='sign-form-page'>
       {isLoading && <LoadingPage />}
       <div className='sign-form-header'>
         <h2>Create Account</h2>
         By creating an account you are gonna be able to make orders and track your order history.
         Save your favorite items to your account.
         <div>
           Already have an account? <Link to='/account/signIn'>Sign In</Link>
         </div>
       </div>
       <div className='sign-form-container'>
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
