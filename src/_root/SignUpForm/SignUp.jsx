import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { createUser } from '../../config/Appwrite/api';
import { Link, useNavigate } from 'react-router-dom';
import AvatarCustomization from '../Avatar/avatars';
import { useUserContext } from '../../context/authContext';
import CreateProfile from '../Pages/CreateProfile';

function SignUp() {
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const navigate = useNavigate();
  const { checkAuthUser, user,setUser } = useUserContext();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', email: '', password: '' };

    // Username validation
    if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must contain at least 1 number and be at least 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (validateForm()) {
      setLoading(true);
      console.log('before userinfo :', username, email, password);
      const user = await createUser(username, email, password);

      // email: userData?.email,
      // id: userData?.$id || '',
      // username: userData?.username,
      // imageUrl: userData?.profileUrl,
      // bio: userData?.bio,
      // name: userData?.name,
      const userData = {
        email: email,
        id: user.$id,
        username: username,
        imageUrl: profileUrl,
        bio: bio,
        name: name
      }
      await checkAuthUser()
      const isLoggedin = setUser(userData);
      console.log('signup : ', user);
      if (!isLoggedin) {
        navigate('/sign-in');
      }
      navigate('/Dashboard');

      console.log('userData', isLoggedin, 'info', user);
    }
  };

  const handleUrlChange = (url) => {
    setProfileUrl(url);
  };

  return (
    <section className="flex justify-center min-h-screen py-12 bg-gray-50">
      <div className="w-full max-w-md">
        <h2 className="mb-6 text-3xl font-bold text-primary-darkest">Sign up</h2>
        <p className="text-gray-600">
          Already have an account?
          <button
            onClick={() => {
              console.log('here');
              navigate('/log-in');
            }}
            className="font-medium text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-base font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"
                  id="fullName"
                ></input>
              </div>
            </div>
            <div>
              <label htmlFor="name" className="text-base font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Username"
                  id="name"
                ></input>
              </div>
              {errors.username && <p className="text-red-500">{errors.username}</p>}
            </div>



            <div>
              <label htmlFor="email" className="text-base font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  id="email"
                ></input>
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-base font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Create Password"
                  id="password"
                ></input>
              </div>
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>



            <div>
              <div className="border-black rounded-full">
                <AvatarCustomization gettingUrl={handleUrlChange} />
              </div>
              <label htmlFor="bio" className="text-base font-medium text-gray-900">
                Bio
              </label>
              <div className="mt-2">
                <textarea
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about yourself..."
                  id="bio"
                  rows="4"
                />
              </div>

              {/* Avatar customization component */}

            </div>

            <div>
              {loading ? (
                <button
                  type="submit"
                  className={`inline-flex w-full items-center justify-center rounded-md ${isFormSubmitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'
                    } px-3.5 py-2.5 font-semibold text-white hover:bg-black/80`}
                >
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-white-600 fill-gray-400"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </button>
              ) : (
                <button
                  type="submit"
                  className={`inline-flex bg-primary-darker w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-primary-darkest bg-opacity-80`}
                >
                  Next
                  <ArrowRight />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
