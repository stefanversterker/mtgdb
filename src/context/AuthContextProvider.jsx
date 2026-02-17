import {useNavigate} from 'react-router-dom';
import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import isTokenValid from "../Helpers/isTokenValid.js";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const navigate = useNavigate();
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    })

    useEffect(() => {
        const jwtToken = localStorage.getItem('token')
        if (jwtToken) {
            const decoded = jwtDecode(jwtToken)
            if (isTokenValid(jwtToken)) {
                toggleAuth({
                    isAuth: true,
                    status: 'done',
                    user: {
                        email: decoded.email,
                        role: decoded.role,
                    },
                })
            } else {
                toggleAuth({
                    ...auth,
                    status: 'done',
                })
            }
        } else {
            toggleAuth({
                ...auth,
                status: 'done',
            })

        }
    }, []);




function login(userDetails) {
    localStorage.setItem('token', userDetails.token)
    console.log("Je bent ingelogd");
    toggleAuth({
        isAuth: true,
        status: 'done',
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
        status: 'done',
        user: null,

    });
    navigate("/welcome")

}


    const authData = {
        isAuth: auth.isAuth,
        toggleAuth,
        login,
        logout,
    };

    return (

        <AuthContext.Provider value={authData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider