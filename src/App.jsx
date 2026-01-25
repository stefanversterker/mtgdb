import './App.css'
import NavBar from "./Components/NavBar/NavBar.jsx";
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import CollectionEditor from './Pages/CollectionEditor/CollectionEditor.jsx';
import DeckEditor from './Pages/DeckEditor/DeckEditor.jsx';
import Wishlist from './Pages/Wishlist/Wishlist.jsx';
import SignUp from "./Pages/SignUp/SignUp.jsx";
import LogIn from "./Pages/LogIn/LogIn.jsx";
import Account from "./Pages/Account/Account.jsx";
import AccountEditor from "./Pages/AccountEditor/AccountEditor.jsx";

function App() {

    return (
        <div className="app-container red-border">
            <NavBar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/collection-editor" element={<CollectionEditor/>}/>
                <Route path="/deck-editor" element={<DeckEditor/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/log-in" element={<LogIn/>}/>
                <Route path="/account/edit-account" element={<AccountEditor/>}/>
            </Routes>
        </div>
    )
}

export default App
