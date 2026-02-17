import './NavBar.css'
import {NavLink} from "react-router-dom";
import magic from '/src/assets/magic.png'
import Button from "../Button/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";

function NavBar() {

    const {toggleIsAuth, isAuth, login, logout} = useContext(AuthContext)

    return (

        <>
            <nav className="navbar">
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/"><h2>Home</h2></NavLink></li>
                    {/*<li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/wishlist"><h2>Wishlist</h2></NavLink></li>*/}
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/account"><h2>Account</h2></NavLink></li>
                </ul>
                <figure>
                    <img className="magic-logo" src={magic} alt="letter m in magic the gathering font"/>
                </figure>
                <div className="auth-buttons">
                    {!isAuth ?
                    <div className="auth-buttons">
                        <Button buttonContent="Sign up"/>
                        <Button buttonContent="Log in" onClick={() => login()}/>
                    </div>
                        :
                    <Button buttonContent="Log out" onClick={() => logout()}/>
                    }
                </div>
            </nav>
        </>
    )
}
export default NavBar