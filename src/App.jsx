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
            </Routes>
        </div>
    )
}

export default App
