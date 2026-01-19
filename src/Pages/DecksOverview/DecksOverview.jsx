import './DecksOverview.css'
import DeckSearch from "../../Components/DeckSearch/DeckSearch.jsx";
import Button from "../../Components/Button/Button.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import DeckContainer from "../../Components/DeckContainer/DeckContainer.jsx";
/*import { Routes, Route } from 'react-router-dom';*/

function DecksOverview() {
    return (

        <main className="main-container blue-border">

            <div className="decks-overview-container green-border">
                <header className="decks-header orange-border">
                    <h1>Decks</h1>
                    <Button buttonContent="New deck"></Button>
                </header>
                <article className="decks-flow-container pink-border">
                    <Veil>
                        <ul className="orange-border decks-flow">
                            <DeckContainer deckName="Boerenkool met worst"></DeckContainer>
                            <DeckContainer deckName="My Brain Hurts"></DeckContainer>
                            <DeckContainer deckName="Elves and Dragons"></DeckContainer>
                            <DeckContainer deckName="Disposablito"></DeckContainer>
                            <DeckContainer deckName="You're still here...why?"></DeckContainer>
                            <DeckContainer deckName="Wear your brown trousers"></DeckContainer>
                            <DeckContainer deckName="You fight like a dairy farmer"></DeckContainer>
                            <DeckContainer deckName="Run forest, RUN!"></DeckContainer>
                            <DeckContainer deckName="Teenage mutant ninja goblins"></DeckContainer>
                            <DeckContainer deckName="Hold my beer"></DeckContainer>
                            <DeckContainer deckName="This might sting a little"></DeckContainer>
                            <DeckContainer deckName="Deck the halls with boughs of holly"></DeckContainer>
                        </ul>
                    </Veil>
                </article>
            </div>

        </main>
    )
}

export default DecksOverview