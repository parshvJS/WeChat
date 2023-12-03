import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
// import { createProfile } from '../../config/Appwrite/api';
import { Link, useNavigate } from 'react-router-dom';
import AvatarCustomization from '../Avatar/avatars';
import { useUserContext } from '../../context/authContext';
import { SaveDataToUserDB, createProfile } from '../../config/Appwrite/api';

function CreateProfile() {
  const navigate = useNavigate();
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [profileUrl, setProfileUrl] = useState('');
  const { user, checkAuthUser } = useUserContext();


  const handleSubmit = async (e) => {
    console.log(user)
    e.preventDefault();
    setLoading(true);
    // email: userData?.email,
    // id: userData?.$id || '',
    // username: userData?.username,
    // imageUrl: userData?.profileUrl,
    // bio: userData?.bio,
    // name: userData?.name,

    checkAuthUser()
    // await SaveDataToUserDB(user?.username,user?.name,user?.id,user?.email,user?.imageUrl,user?.bio)
    setIsFormSubmitted(true);
    console.log('user is :', user)
    if (user) {
      navigate('/dashboard');
    }
  };

  const handleUrlChange = (url) => {
    setProfileUrl(url);
  };

  return (
    <section className="flex items-center gap-14 p-13 justify-center h-screen">
      <div className="w-[40%] p-8 ">

        <form className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-base font-medium text-gray-900">
                Full Name (Display Name)
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"
                  id="fullName"
                />
              </div>
            </div>

            <div>
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
            </div>

            {/* Avatar customization component */}
            <div className='border-black radius-[999px]'>
              <AvatarCustomization gettingUrl={handleUrlChange} />

            </div>
            <div>
              <button
                onClick={(e) => handleSubmit(e)}
                className={`inline-flex bg-primary-darker w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-primary-darkest bg-opacity-80`}
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-white-600 fill-gray-400"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* ... (loading animation paths) */}
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <>
                    Next <ArrowRight />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
}

export default CreateProfile;
