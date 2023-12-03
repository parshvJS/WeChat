import React from 'react'
import Avatar from 'avataaars'

import AuthLayout from '../_root/AuthLayout'
import SignUp from '../_root/SignUpForm/SignUp';
import AvatarCustomization from '../_root/Avatar/avatars';

const Home = () => {
    const auth = false;
    if (!auth) {
        return (
            <SignUp />
        )
    }
    else {
        return (
            <div>
                <AvatarCustomization />
            </div>
        )
    }
}

export default Home