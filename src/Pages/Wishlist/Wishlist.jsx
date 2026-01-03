import './Wishlist.css'
import CardTypeDropdown from "../../Components/CardTypeDropdown/CardTypeDropdown.jsx";
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import CardInCollection from "../../Components/CardInCollection/CardInCollection.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
/*import { Routes, Route } from 'react-router-dom';*/

function Wishlist() {
    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Wishlist">
                <CardInCollection management={<CardManagement counter={<CardCounter/>}/>}></CardInCollection>
            </CardSearch>
        </main>
    )
}

export default Wishlist