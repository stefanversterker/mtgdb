import {useNavigate} from 'react-router-dom';
import {createContext, useState} from "react";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false)
    const navigate = useNavigate();


    function login() {
        console.log("Je bent ingelogd");
        !isAuth && toggleIsAuth(true);
        navigate("/")
    }

    function logout() {
        console.log("Je bent uitgelogd");
        isAuth && toggleIsAuth(false);
        navigate("/welcome")
    }

    const authData = {
        isAuth,
        toggleIsAuth,
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