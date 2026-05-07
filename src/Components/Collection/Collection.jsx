import './Collection.css'
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import Card from "../../Components/Card/Card.jsx";
import {useContext, useState} from 'react'
import CounterBox from "../CounterBox/CounterBox.jsx";
import Veil from "../Veil/Veil.jsx";
import Button from "../Button/Button.jsx";
import {CollectionContext} from "../../context/CollectionContextProvider.jsx";
import Message from "../Message/Message.jsx";

function Collection({children, headerButtonClick, headerButtonContent}) {

    const {
        userCollectionData,
        updateAmountInCollection,
        deleteEntry,
        userCollection,
        loading,
        error,
        data
    } = useContext(CollectionContext);

    return (

        <section className="collection-overview-container green-border">

            <header className="collection-header orange-border">
                <h1>My Collection</h1>
                <Button buttonContent={headerButtonContent} onClick={headerButtonClick}/>
            </header>
            <div className="collection-flow-container pink-border">
                <Veil>
                    <ul className="card-flow orange-border">
                        {loading ? (
                            <Message className="good-news">Loading...</Message>
                        ) : error ? (
                            <Message className="bad-news">Sorry, we were unable to find your cards</Message>
                        ) : userCollection.length === 0 ?
                            <div className="message-container pink-border">
                                <Message className="good-news">Your collection is empty, add some cards!</Message>
                            </div> :
                        (
                            userCollectionData.map(card => {
                                const userEntry = userCollection.find(
                                    entry => entry.cardId === card.id
                                );

                                if(!userEntry) return null;

                                const amount = userEntry?.cardAmount ?? 0;

                                return (
                                    <li key={card.id}>
                                        <Card
                                            cardImage={
                                                card.image_uris?.png ??
                                                card.card_faces?.[0]?.image_uris?.png
                                            }
                                            management={
                                                <CardManagement
                                                    lightBoxSource={
                                                        card.image_uris?.png ??
                                                        card.card_faces?.[0]?.image_uris?.png
                                                    }
                                                >
                                                    <CounterBox cardAmount={amount}/>
                                                    {typeof children === "function" ? children({
                                                        amount,
                                                        increaseAmount: () => updateAmountInCollection(userEntry.id, +1),
                                                        decreaseAmount: () => updateAmountInCollection(userEntry.id, -1),
                                                        deleteEntry: () => deleteEntry(userEntry.id),
                                                    }) : children}
                                                </CardManagement>
                                            }
                                            cardImageAlt={card.name}
                                        />
                                    </li>
                                );
                            })
                        )}
                    </ul>
                </Veil>
            </div>
        </section>

    )
}

export default Collection