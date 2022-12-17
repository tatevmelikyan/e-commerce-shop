import { signInWithEmailAndPassword } from '@firebase/auth'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../app/hooks'
import { setCurrentUser } from '../../features/slices/currentUserSlice'
import { auth } from '../../firebase/auth'
import LoadingPage from '../loading/loadingPage'

const SignIn = () => {
  const [isLoading, setIsLoading] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((userCred) => {
    const {displayName, email, uid} = userCred.user
   dispatch(setCurrentUser({name: displayName, email, id: uid}))
   console.log('signed in');
   navigate('/account')
  })
  .catch((err) => {
   toast.error(err.message)
  });
  }

  return (
    <div className='sign-form-page'>
       {isLoading && <LoadingPage />}
       <div className='sign-form-header'>
         <h2>Sign In</h2>
         Sign in to your account to see your favorite items and items in your cart.
         <div>
          Still don&apos;t have an account? <Link to='/account/signUp'>Sign up</Link>
         </div>
       </div>
       <div className='sign-form-container'>
         <form onSubmit={handleSignIn}>
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
           <button>Sign In</button>
         </form>
       </div>
        </div>
  )
}

export default SignIn