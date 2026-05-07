import './DeckOverviewContainer.css';
import ManaBlack from "/src/assets/symbols/mana-black.svg?react";
import ManaBlue from "/src/assets/symbols/mana-blue.svg?react";
import ManaGreen from "/src/assets/symbols/mana-green.svg?react";
import ManaRed from "/src/assets/symbols/mana-red.svg?react";
import ManaWhite from "/src/assets/symbols/mana-white.svg?react";
import {Link} from "react-router-dom";
import {CollectionContext} from "../../context/CollectionContextProvider.jsx";
import {useContext} from "react";

const manaMap = {
    B: <ManaBlack className="mana-symbol"/>,
    R: <ManaRed className="mana-symbol"/>,
    W: <ManaWhite className="mana-symbol"/>,
    U: <ManaBlue className="mana-symbol"/>,
    G: <ManaGreen className="mana-symbol"/>
};

function DeckOverviewContainer({deckName, deckId, cardAmount}) {
    const {addCard, collectionId, loading, userDecks, deckData} = useContext(CollectionContext);


    return (

        <Link to={`/deck-editor/${deckId}`}>
            <article className="deck-box">
                <h3 className="deck-title">{deckName}</h3>
                <div className="symbols-and-buttons purple-border">
                    <ul className="mana-symbols">
                        <li className="symbol-container">
                            <ManaWhite className="mana-symbol"/>
                        </li>
                        <li className="symbol-container">
                            <ManaBlue className="mana-symbol"/>
                        </li>
                        <li className="symbol-container">
                            <ManaBlack className="mana-symbol"/>
                        </li>
                        <li className="symbol-container">
                            <ManaRed className="mana-symbol"/>
                        </li>
                        <li className="symbol-container">
                            <ManaGreen className="mana-symbol"/>
                        </li>
                    </ul>
                </div>
            </article>
        </Link>
    )
}

export default DeckOverviewContainer