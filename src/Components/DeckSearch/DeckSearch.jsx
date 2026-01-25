import './DeckSearch.css'
import DeckContainer from "../DeckContainer/DeckContainer.jsx";
import Veil from "../Veil/Veil.jsx";
import Button from "../Button/Button.jsx";

function DeckSearch() {
    return (

        <section className="decks-container">
            <header className="decks-header">
                <h1>Decks</h1>
                <Button buttonContent="New deck"></Button>
            </header>
            <article className="orange-border decks-flow">
                <Veil>
                    <section>
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

                    </section>
                </Veil>
            </article>
        </section>

    )
}

export default DeckSearch