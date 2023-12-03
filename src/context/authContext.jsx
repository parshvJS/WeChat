import { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from "react";
import { getCurrentUser } from "../config/Appwrite/api";
import { useNavigate } from "react-router-dom";

const INITIAL_USER = {
    name: '',
    email: '',
    id: '',
    imageUrl: '',
    username: '',
    bio: '',
}

// context structure
const INITIAL_AUTH = {
    user: INITIAL_USER,
    setUser: () => { },
    isAuthanticated: false,
    setIsAuthanticated: () => { },
    checkAuthUser: async () => false
}

const authContext = createContext(INITIAL_AUTH);

const AuthProvier = ({ children }) => {
    const [user, setUser] = useState(INITIAL_USER);
    const [isAuthanticated, setIsAuthanticated] = useState(false);
    const [firstData, SetfirstData] = useState({})
    const [secondData, SetSecondData] = useState({})
    // fill userdata and return status in the form of true and false
    const checkAuthUser =  async () => {
        const userData = await getCurrentUser();
       
        setIsAuthanticated(true);
        return true;

    };





    const navigate = useNavigate();

    // when the website is opened, it checks if the user is logged in or not
    useEffect(() => {
        const cookieFallBack = localStorage.getItem('cookieFallBack');
        if (!cookieFallBack) {
            navigate('/sign-in');
        }
        else {
            navigate('/Dashboard')
        }
        checkAuthUser();
    }, []);


    const value = {
        user,
        setUser,
        isAuthanticated,
        setIsAuthanticated,
        checkAuthUser,
    };

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvier;
export const useUserContext = () => useContext(authContext);
