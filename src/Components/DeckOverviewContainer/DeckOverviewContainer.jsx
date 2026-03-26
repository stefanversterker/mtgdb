import './DeckOverviewContainer.css';
import ManaBlack from "/src/assets/symbols/mana-black.svg?react";
import ManaBlue from "/src/assets/symbols/mana-blue.svg?react";
import ManaColorless from "/src/assets/symbols/mana-colorless.svg?react";
import ManaGreen from "/src/assets/symbols/mana-green.svg?react";
import ManaRed from "/src/assets/symbols/mana-red.svg?react";
import ManaWhite from "/src/assets/symbols/mana-white.svg?react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CounterBox from "../CounterBox/CounterBox.jsx";
import {CollectionContext} from "../../context/CollectionContextProvider.jsx";
import {useContext} from "react";

function DeckOverviewContainer({deckName, deckId, cardAmount}) {
    const {addCard, collectionId, loading, userDecks} = useContext(CollectionContext);

    return (

        <Link to={`/deck-editor/${deckId}`}>
            <li className="deck-box">
                <div className="deck-title">
                    <h3 className="deck-title">{deckName}</h3>
                </div>
                <div className="symbols-and-buttons purple-border">
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
                    {/*<div className="deck-summary-buttons">
                        <CounterBox cardAmount={cardAmount}/>
                    </div>*/}
                </div>
            </li>
        </Link>
    )
}

export default DeckOverviewContainer