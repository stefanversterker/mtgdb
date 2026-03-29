import './Home.css'
import Veil from "../../Components/Veil/Veil.jsx";
import Button from "../../Components/Button/Button.jsx";
import DeckOverviewContainer from "../../Components/DeckOverviewContainer/DeckOverviewContainer.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from 'react'
import Collection from "../../Components/Collection/Collection.jsx";
import CounterBox from "../../Components/CounterBox/CounterBox.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import {CollectionContext} from "../../context/CollectionContextProvider.jsx";

function Home() {



    const navigate = useNavigate();
    const {loading, userDecks, cardsInDeck, postNewDeck, userId, fetchCardId, fetchCollectionId} = useContext(CollectionContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (

        <main className="main-container blue-border">
            {console.log("Home userId:", userId)}
            {console.log("loading:", loading)}
            <section className="main-container">
                <Collection
                    headerButtonContent="Edit collection"
                    headerButtonClick={() => navigate("/collection-editor")}
                    renderExtra={(card, amount) => (

                        <CounterBox
                            cardAmount={amount}
                            cardId={card.id}
                        />
                    )}
                >

                </Collection>
                <div className="decks-overview-container green-border">
                    <header className="decks-header orange-border">
                        <h1>My Decks</h1>
                        <Button
                            buttonContent="New deck"
                            type="button"
                            onClick={() => {postNewDeck()}}
                        />
                    </header>
                    <article className="decks-flow-container pink-border">
                        <Veil>
                            <div className="orange-border decks-flow">
                                {userDecks?.map(deck => {
                                    return (
                                        <div key={deck.id}>
                                            <DeckOverviewContainer deckName={deck.deckName} cardAmount={cardsInDeck} deckId={deck.id}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </Veil>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Home