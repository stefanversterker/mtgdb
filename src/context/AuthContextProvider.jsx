import {useNavigate} from 'react-router-dom';
import {createContext, useState} from "react";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
    })
    const navigate = useNavigate();


    function login(userDetails) {
        localStorage.setItem('token', userDetails.token)
        console.log("Je bent ingelogd");
        toggleAuth({
            isAuth: true,
            //TIJDELIJK
            user: {
                email: userDetails.user.email,
                roles: userDetails.user.roles,
            },
        });
        navigate("/")
    }

    function logout() {
        console.log("Je bent uitgelogd");
        localStorage.removeItem('token');
        toggleAuth({
            isAuth: false,
            user: null,
        });
        navigate("/welcome")
    }

    const authData = {
        isAuth: auth.isAuth,
        toggleAuth,
        login,
        logout,
    }

    return (

        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider