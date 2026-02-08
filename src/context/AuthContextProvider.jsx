
import {createContext, useState} from "react";



export const AuthContext = createContext({})

function AuthContextProvider({children}) {
const [isAuth, toggleIsAuth] = useState({
    isAuth: false,
})
    /*const data = {
        //TIJDELIJK!
        auth: isAuth,
        toggleAuth: toggleIsAuth,
    }*/

    return (

        <AuthContext.Provider value={{isAuth, toggleIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider