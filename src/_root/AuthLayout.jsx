import React from 'react'
import SignUp from './SignUpForm/SignUp';
import { Navigate, Outlet } from 'react-router-dom'
import Home from '../main/Home';
import { useUserContext } from '../context/authContext';

const AuthLayout = () => {

    const {isAuthanticated} = useUserContext();
    if (isAuthanticated === false) {
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