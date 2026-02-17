import './App.css'
import NavBar from "./Components/NavBar/NavBar.jsx";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import CollectionEditor from './Pages/CollectionEditor/CollectionEditor.jsx';
import DeckEditor from './Pages/DeckEditor/DeckEditor.jsx';
import Wishlist from './Pages/Wishlist/Wishlist.jsx';
import SignUp from "./Pages/SignUp/SignUp.jsx";
import LogIn from "./Pages/LogIn/LogIn.jsx";
import Account from "./Pages/Account/Account.jsx";
import AccountEditor from "./Pages/AccountEditor/AccountEditor.jsx";
import Welcome from "./Pages/Welcome/Welcome.jsx";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContextProvider.jsx";

function App() {

    const {isAuth} = useContext(AuthContext)

    return (
        <div className="app-container red-border">
            <NavBar/>

            <Routes>
                <Route path="/" element={isAuth === true ? <Home/> : <Navigate to="/welcome"/>}/>
                <Route path="/collection-editor" element={isAuth === true ? <CollectionEditor/> : <Navigate to="/welcome"/>}/>
                <Route path="/deck-editor" element={isAuth === true ? <DeckEditor/> : <Navigate to="/welcome"/>}/>
               {/* <Route path="/wishlist" element={isAuth === true ? <Wishlist/> : <Navigate to="/welcome"/>}/>*/}
                <Route path="/account" element={isAuth === true ? <Account/> : <Navigate to="/welcome"/>}/>
                <Route path="/account/edit-account" element={isAuth === true ? <AccountEditor/> : <Navigate to="/welcome"/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/log-in" element={<LogIn/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
            </Routes>
        </div>
    )
}

export default App
