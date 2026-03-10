import './DeckEditor.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import DeckEditWindow from "../../Components/DeckEditWindow/DeckEditWindow.jsx";
import icy_manipulator from "../../assets/testcards/icy_manipulator__s6__cn249_lnen.jpg";
import Card from "../../Components/Card/Card.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd.jsx";
import ButtonMagnify from "../../Components/ButtonMagnify/ButtonMagnify.jsx";
import CardDatabase from "../../Components/CardDatabase/CardDatabase.jsx";

function DeckEditor() {
    return (

        <main className="main-container blue-border">
            <CardDatabase/>

            <DeckEditWindow>

            </DeckEditWindow>
        </main>
)
}

export default DeckEditor