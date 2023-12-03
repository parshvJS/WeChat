import React, { useEffect } from 'react'
import { useUserContext } from '../../context/authContext'

const Dashboard = () => {
  const {user,isAuthanticated}=useUserContext()
  useEffect(()=>{
    console.log(user)
    console.log(isAuthanticated)
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard