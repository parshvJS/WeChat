import React from 'react'
import SignUp from './SignUpForm/SignUp';
import { Navigate, Outlet } from 'react-router-dom'
import Home from '../main/Home';
import { useUserContext } from '../context/authContext';

const AuthLayout = () => {
    const {isAuthanticated} = useUserContext();
    console.log(isAuthanticated)
    if (!isAuthanticated) {
        return (
            <Navigate to='/' />
        )
    }
    else {
        return (
            <Outlet />
        )
    }


}

export default AuthLayout