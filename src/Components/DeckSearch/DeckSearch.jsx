import './DeckSearch.css'
import DeckContainer from "../DeckContainer/DeckContainer.jsx";
import Veil from "../Veil/Veil.jsx";
import Button from "../Button/Button.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function DeckSearch() {
    return (


            <Veil>
                <section className="orange-border decks-flow">
                    <DeckContainer deckName="Boerenkool met worst"></DeckContainer>
                    <DeckContainer deckName="My Brain Hurts"></DeckContainer>
                    <DeckContainer deckName="Elves and Dragons"></DeckContainer>
                    <DeckContainer deckName="Disposablito"></DeckContainer>
                    <DeckContainer deckName="You're still here...why?"></DeckContainer>
                    <DeckContainer deckName="Wear you brown trousers"></DeckContainer>
                    <DeckContainer deckName="You fight like a dairy farmer"></DeckContainer>
                    <DeckContainer deckName="Run forest, Run!"></DeckContainer>
                    <DeckContainer deckName="Teenage mutant ninja goblins"></DeckContainer>
                    <DeckContainer deckName="Hold my beer"></DeckContainer>
                    <DeckContainer deckName="This might sting a little"></DeckContainer>
                </section>
                <div className="new-deck-button">
                    <Button buttonContent="New deck"></Button>
                </div>
            </Veil>

    )
}

export default DeckSearch