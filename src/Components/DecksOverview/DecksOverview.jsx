import './DecksOverview.css'
import DeckOverviewContainer from "../DeckOverviewContainer/DeckOverviewContainer.jsx";
import Veil from "../Veil/Veil.jsx";
import Button from "../Button/Button.jsx";

function DecksOverview() {
    return (

        <section className="decks-container">
            <header className="decks-header">
                <h1>Decks</h1>
                <Button buttonContent="New deck"></Button>
            </header>
            <article className="orange-border decks-flow">
                <Veil>
                    <section>
                        <DeckOverviewContainer deckName="Boerenkool met worst"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="My Brain Hurts"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="Elves and Dragons"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="Disposablito"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="You're still here...why?"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="Wear your brown trousers"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="You fight like a dairy farmer"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="Run forest, RUN!"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="Teenage mutant ninja goblins"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="Hold my beer"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="This might sting a little"></DeckOverviewContainer>
                        <DeckOverviewContainer deckName="Deck the halls with boughs of holly"></DeckOverviewContainer>

                    </section>
                </Veil>
            </article>
        </section>

    )
}

export default DecksOverview