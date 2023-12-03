import React, { useEffect } from 'react'
import { useUserContext } from '../../context/authContext'

const Dashboard = () => {
  const {user}=useUserContext()
  useEffect(()=>{
    console.log(user)
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard