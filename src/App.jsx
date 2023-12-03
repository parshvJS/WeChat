import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './_root/SignUpForm/SignUp'
import Login from './_root/LogInForm/Login'
import AuthLayout from './_root/AuthLayout'
import Home from './main/Home'
import CreateProfile from './_root/Pages/CreateProfile'
import Dashboard from './_root/Pages/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route  path='/sign-in' element={<SignUp />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/profile-build' element={<CreateProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>

      <Route index element={<Home/>}/>
    </Routes>

  )
}

export default App