import './DeckEditor.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import DeckEditWindow from "../../Components/DeckEditWindow/DeckEditWindow.jsx";
import CardInDataBase from "../../Components/CardInDataBase/CardInDataBase.jsx";
import icy_manipulator from "../../assets/testcards/icy_manipulator__s6__cn249_lnen.jpg";

/*import { Routes, Route } from 'react-router-dom';*/

function DeckEditor() {
    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Card Database">
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>

            </CardSearch>
            <DeckEditWindow>

            </DeckEditWindow>
        </main>
)
}

export default DeckEditor