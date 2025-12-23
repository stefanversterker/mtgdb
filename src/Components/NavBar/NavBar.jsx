import './NavBar.css'
/*import { Routes, Route } from 'react-router-dom';*/
import {Link, NavLink} from "react-router-dom";

function NavBar() {
    return (

        <>
            <nav className="navbar">
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/collection-overview">Collection</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/decks-overview">Decks</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/wishlist">Wishlist</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar