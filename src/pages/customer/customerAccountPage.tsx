import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppSelector } from '../../app/hooks'
import { auth } from '../../firebase/auth'
import './styles.css'


const CustomerAccountPage = () => {
  const currentUser = useAppSelector((state) => state.currentUser.currentUser)
  const navigate = useNavigate()

  useEffect(() => {
    if(!currentUser) {
      navigate('/account/signIn')
    }
    if(!auth.currentUser?.emailVerified) {
      navigate('/account/verifyEmail')
    }
  }, [])

  return <div>
    <h2>Hi, {currentUser?.name}</h2>
  </div>
}

export default CustomerAccountPage
