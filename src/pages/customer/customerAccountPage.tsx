import React from 'react'
import { useAppSelector } from '../../app/hooks'

const CustomerAccountPage = () => {
  const currentUser = useAppSelector((state) => state.currentUser)

  return <div>Welcome {currentUser.name}</div>
}

export default CustomerAccountPage
