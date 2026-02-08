import './NavBar.css'
import {NavLink} from "react-router-dom";
import magic from '/src/assets/magic.png'
import Button from "../Button/Button.jsx";

function NavBar() {
    return (

        <>
            <nav className="navbar">
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/"><h2>Home</h2></NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/wishlist"><h2>Wishlist</h2></NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/account"><h2>Account</h2></NavLink></li>
                </ul>
                <figure>
                    <img className="magic-logo" src={magic} alt="letter m in magic the gathering font"/>
                </figure>
                <div className="auth-buttons">
                    <Button buttonContent="Sign up"/>
                    <Button buttonContent="Sign in"/>
                    <Button buttonContent="Log out"/>
                </div>
            </nav>
        </>
    )
}
export default NavBar