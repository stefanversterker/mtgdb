import './Home.css'
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Dropdown from "../../Components/Dropdown/Dropdown.jsx";
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
/*import { Routes, Route } from 'react-router-dom';*/

function Home() {
    return (

        <main className="main-container blue-border">
            <h1>Home</h1>
            <CardSearch/>
        </main>
    )
}

export default Home