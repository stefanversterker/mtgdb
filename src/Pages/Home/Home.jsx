import './Home.css'
/*import Veil from "../../Components/Veil/Veil.jsx";*/
import Input from "../../Components/Input/Input.jsx";
import Dropdown from "../../Components/Dropdown/Dropdown.jsx";
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import icy_manipulator from "/src/assets/testcards/icy_manipulator__s6__cn249_lnen.jpg"
import lake_of_the_dead from "/src/assets/testcards/lake_of_the_dead__s46__cn140_lnen.jpg"
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Button from "../../Components/Button/Button.jsx";
import {NavLink} from "react-router-dom";

/*import { Routes, Route } from 'react-router-dom';*/

function Home() {
    return (

        <main className="main-container blue-border">
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/sign-up"><h2>SignUp</h2></NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/log-in"><h2>LogIn</h2></NavLink></li>
            </ul>
        </main>
    )
}

export default Home