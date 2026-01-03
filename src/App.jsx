import {useState} from 'react'
import './App.css'
import NavBar from "./Components/NavBar/NavBar.jsx";
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import CollectionOverview from './Pages/CollectionOverview/CollectionOverview.jsx';
import CollectionEditor from './Pages/CollectionEditor/CollectionEditor.jsx';
import DecksOverview from './Pages/DecksOverview/DecksOverview.jsx';
import DeckEditor from './Pages/DeckEditor/DeckEditor.jsx';
import Wishlist from './Pages/Wishlist/Wishlist.jsx';
import bgWhite from './assets/bgWhite.png';
import SignUp from "./Pages/SignUp/SignUp.jsx";
import LogIn from "./Pages/LogIn/LogIn.jsx";

function App() {




    return (
        <div className="app-container red-border">
            <NavBar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/collection-overview" element={<CollectionOverview/>}/>
                <Route path="/collection-editor" element={<CollectionEditor/>}/>
                <Route path="/decks-overview" element={<DecksOverview/>}/>
                <Route path="/deck-editor" element={<DeckEditor/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/log-in" element={<LogIn/>}/>

            </Routes>
        </div>
    )
}

export default App
