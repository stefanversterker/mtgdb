import './DeckEditor.css'
import DeckEditWindow from "../../Components/DeckEditWindow/DeckEditWindow.jsx";
import CardDatabase from "../../Components/CardDatabase/CardDatabase.jsx";
import { useParams } from "react-router-dom";

import {CollectionContext} from "../../context/CollectionContextProvider.jsx";
import {useContext} from "react";

function DeckEditor() {

    const {addCardToDeck} = useContext(CollectionContext);
    const { deckId } = useParams();
    return (

        <main className="main-container blue-border">
            <CardDatabase onClickAdd={(card) => addCardToDeck(card, deckId)}/>

            <DeckEditWindow/>
        </main>
)
}


export default DeckEditor