import './Home.css'
import Veil from "../../Components/Veil/Veil.jsx";
import Button from "../../Components/Button/Button.jsx";
import DeckOverviewContainer from "../../Components/DeckOverviewContainer/DeckOverviewContainer.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from 'react'
import Collection from "../../Components/Collection/Collection.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import CounterBox from "../../Components/CounterBox/CounterBox.jsx";

function Home() {

    const navigate = useNavigate();
    /*const [loggedIn, toggleLoggedIn] = useState(false)*/

    /*function logInOut() {
        if (loggedIn) {
            toggleLoggedIn(false)
            console.log(loggedIn)
        } else if (!loggedIn) {
            toggleLoggedIn(true)
            console.log(loggedIn)
        }
    }*/

    return (

        <main className="main-container blue-border">
            <section className="main-container">
                <Collection
                    headerButtonContent="Edit collection"
                    headerButtonClick={() => navigate("/collection-editor")} renderExtra={(card, amount) => (
                    <CounterBox cardAmount={amount} cardId={card.id} />
                )}
                >
                </Collection>
                <div className="decks-overview-container green-border">
                    <header className="decks-header orange-border">
                        <h1>My Decks</h1>
                        <Button buttonContent="New deck"></Button>
                    </header>
                    <article className="decks-flow-container pink-border">
                        <Veil>
                            <ul className="orange-border decks-flow">
                                <DeckOverviewContainer deckName="Boerenkool met worst"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="My Brain Hurts"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="Elves and Dragons"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="Disposablito" cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="You're still here...why?"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="Wear your brown trousers"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="You fight like a dairy farmer"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="Run forest, RUN!"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="Teenage mutant ninja goblins"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="Hold my beer" cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="This might sting a little"
                                                       cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName="Deck the halls with boughs of holly"
                                                       cardAmount="60"></DeckOverviewContainer>
                            </ul>
                        </Veil>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Home