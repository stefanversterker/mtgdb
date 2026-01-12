import './DeckContainer.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import Duplicate from "/src/assets/symbols/duplicate.svg?react";
import EditPencil from "/src/assets/symbols/edit-pencil.svg?react";
import Trash from "/src/assets/symbols/trash.svg?react";
import ManaBlack from "/src/assets/symbols/mana-black.svg?react";
import ManaBlue from "/src/assets/symbols/mana-blue.svg?react";
import ManaColorless from "/src/assets/symbols/mana-colorless.svg?react";
import ManaGreen from "/src/assets/symbols/mana-green.svg?react";
import ManaRed from "/src/assets/symbols/mana-red.svg?react";
import ManaWhite from "/src/assets/symbols/mana-white.svg?react";
import { useNavigate } from "react-router-dom";

/*import { Routes, Route } from 'react-router-dom';*/

function DeckContainer({deckName}) {

    const navigate = useNavigate();

    return (

        <li className="deck-box">
            <div className="deck-title">
                <h3>{deckName}</h3>
            </div>
            <div className="symbols-and-buttons">
                <div className="mana-symbols">
                    <figure className="symbol-container">
                        <ManaWhite className="mana-symbol"/>
                    </figure>
                    <figure className="symbol-container">
                        <ManaBlue className="mana-symbol"/>
                    </figure>
                    <figure className="symbol-container">
                        <ManaBlack className="mana-symbol"/>
                    </figure>
                    <figure className="symbol-container">
                        <ManaRed className="mana-symbol"/>
                    </figure>
                    <figure className="symbol-container">
                        <ManaGreen className="mana-symbol"/>
                    </figure>

                </div>
                <div className="deck-summary-buttons">
                    <ButtonSmall
                        className="button-small deck-summary-button"
                        buttonContent={<EditPencil/>}
                        onClick={ () => navigate("/deck-editor")}
                    />
                    <ButtonSmall
                        className="button-small deck-summary-button"
                        buttonContent={<Duplicate/>}
                    />
                    <ButtonSmall
                        className="button-small deck-summary-button"
                        buttonContent={<Trash/>}
                    />
                </div>
            </div>
        </li>
    )
}

export default DeckContainer