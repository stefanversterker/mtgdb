import './NavBar.css'
/*import { Routes, Route } from 'react-router-dom';*/
import {Link, NavLink} from "react-router-dom";
import magic from '/src/assets/magic.png'
import Button from "../Button/Button.jsx";

function NavBar() {
    return (

        <>
            <nav className="navbar">
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/"><h2>Home</h2></NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/collection-overview"><h2>Collection</h2></NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/decks-overview"><h2>Decks</h2></NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/wishlist"><h2>Wishlist</h2></NavLink></li>
                </ul>
                <figure>
                    <img className="magic-logo" src={magic} alt="letter m in magic the gathering font"/>
                </figure>
                <div className="logout-button">
                    <Button/>
                </div>
            </nav>
        </>
    )
}

export default NavBar