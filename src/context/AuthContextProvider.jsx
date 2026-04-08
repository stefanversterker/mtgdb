import {useNavigate} from 'react-router-dom';
import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import isTokenValid from "../Helpers/isTokenValid.js";
import axios from "axios";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [userInitialised, toggleUserInitialised] = useState(false)
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
        token: null,
    });

    async function initUser() {
        console.log("initUser started");

        const member = await fetchMember()
        const userCollection = await fetchCollection()

        if (!member?.length) {
            await newMember(auth.user?.id);
        }
        if (!userCollection?.length) {
            await newCollection(auth.user?.id);
        }
        console.log("initUser finished");
        toggleUserInitialised(true)


    }

    async function newUser(email, password) {

        try {
            const response = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users`, {
                email: email,
                password: password,
                roles: ["member"]
            }, {
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })

            console.log(response)
            /*const newUserId = response?.data.id*/
            /*await newCollection(newUserId)*/
            /*await newMember(newUserId)*/
        } catch (e) {
            console.error("Unable to create new user");
        }
    }

    async function newMember(newUserId) {

        try {
            await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members`,
                {
                    userId: newUserId,
                    firstName: null,
                    lastName: null,
                    userName: null,
                    creatureType: null,
                    bio: null,
                }, {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                })

        } catch (e) {
            console.error("Unable to create new member");
        }
    }

    async function newCollection(newUserId) {

        try {

            await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/userCollections`,
                {
                    userId: newUserId,
                }, {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                })
        } catch (e) {
            console.error("Unable to create new collection");
        }
    }

    async function fetchMember() {

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${auth.user.id}/members`,
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                })

            return response.data

        } catch (e) {
            console.error("Unable to find member");
        }
    }

    async function fetchCollection() {

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${auth.user.id}/userCollections`,
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                })

            return response.data

        } catch (e) {
            console.error("Unable to find collection")
        }
    }

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
        } catch (e) {
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

    useEffect( () => {

        if (auth.status === 'done' && auth.user?.id) {
            !userInitialised && initUser()
        }

    }, [auth.status, auth.user?.id, userInitialised]);


    function login(userDetails) {
        toggleUserInitialised(false)
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
        toggleUserInitialised(false)
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
        newUser,
        email,
        setEmail,
        password,
        setPassword,
    };

    return (

        <AuthContext.Provider value={authData}>
            {auth.status === 'done' && (
                !auth.isAuth || userInitialised
                    ? children
                    : <p>Loading...</p>
            )}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider