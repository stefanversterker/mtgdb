import {useNavigate} from 'react-router-dom';
import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import isTokenValid from "../Helpers/isTokenValid.js";
import axios from "axios";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
        token: null,
    })

    async function fetchUserData() {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/${auth.user.id}`,
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                })
            setUserData(response.data)
            /*console.log(response)*/
        }
        catch(e) {
            console.error("kapot!")
        }
    }

    useEffect(() => {
        const jwtToken = localStorage.getItem('token')
        if (jwtToken) {
            const decoded = jwtDecode(jwtToken)
            if (isTokenValid(jwtToken)) {
                toggleAuth({
                    isAuth: true,
                    status: 'done',
                    token: jwtToken,
                    user: {
                        id: decoded.userId,
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

    /*useEffect(() => {
        if (auth.user?.id) {
            fetchUserData(auth.user.id);
        }
    }, [auth.user]);*/




function login(userDetails) {
    localStorage.setItem('token', userDetails.token)
    const decoded = jwtDecode(userDetails.token);
    console.log("Je bent ingelogd");
    console.log(userDetails)
    toggleAuth({
        isAuth: true,
        status: 'done',
        token: userDetails.token,
        user: {
            id: decoded.userId,
            email: decoded.email,
            roles: decoded.role,
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
        user: auth.user,
        token: auth.token,
        login,
        logout,
        userData,
        setUserData,
        fetchUserData,
    };

    return (

        <AuthContext.Provider value={authData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider