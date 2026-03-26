import './Home.css'
import Veil from "../../Components/Veil/Veil.jsx";
import Button from "../../Components/Button/Button.jsx";
import DeckOverviewContainer from "../../Components/DeckOverviewContainer/DeckOverviewContainer.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from 'react'
import Collection from "../../Components/Collection/Collection.jsx";
import CounterBox from "../../Components/CounterBox/CounterBox.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import {CollectionContext} from "../../context/CollectionContextProvider.jsx";

function Home() {

    const navigate = useNavigate();
    /*const [userCollection, setUserCollection] = useState([]);*/
    const {addCard, collectionId, loading, userDecks, cardsInDeck, postNewDeck} = useContext(CollectionContext);
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
                    headerButtonClick={() => navigate("/collection-editor")}
                    /*updateAmount={updateAmount}*/
                    /* setUserCollection={setUserCollection}
                     userCollection={userCollection}*/
                    /*userId={userId}
                    setUserId={setUserId}*/
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
                                {/*{console.log(userDecks)}*/}
                                {/*<DeckOverviewContainer deckName={userDecks[0].deckName} cardAmount="60"></DeckOverviewContainer>
                                <DeckOverviewContainer deckName={userDecks[1].deckName} cardAmount="60"></DeckOverviewContainer>*/}

                            </div>
                        </Veil>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Home