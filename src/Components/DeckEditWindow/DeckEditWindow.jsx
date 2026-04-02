import './DeckEditWindow.css'
import Veil from "../Veil/Veil.jsx";
import DropdownDetailSummary from "../DropdownDetailSummary/DropdownDetailSummary.jsx";
import CardListItem from "../CardListItem/CardListItem.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx";
import Button from "../Button/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import TrashIcon from "/src/assets/symbols/trash.svg?react";
import {CollectionContext} from "../../context/CollectionContextProvider.jsx";
import {useContext, useEffect, useState} from "react";

function DeckEditWindow() {

    const navigate = useNavigate();
    const {
        addCard,
        loading,
        userDecks,
        fetchDeckEntries,
        deckEntries,
        cardsInDeck,
        deckData,
        updateAmountInDeck,
        deleteDeckEntry,
        userEntry,
        patchDeckName,
        messageStatus,
        deleteDeck
    } = useContext(CollectionContext);

    const {deckId} = useParams();
    const deck = userDecks.find(d => d.id === Number(deckId));
    const [deckName, setDeckName] = useState('')
    const isUnchanged = deckName.trim() === deck?.deckName;

    /*console.log("userDecks in component:", userDecks);*/

    /*console.log(deckName);*/
    /*console.log(deckId);*/

    useEffect(() => {
        if (!deckId) return;
        fetchDeckEntries(deckId);

    }, [deckId]);

    useEffect(() => {
        if (deck) {
            setDeckName(deck.deckName);
        }
    }, [deck]);

    function messageClassName() {
        if (messageStatus === "success") {
            return "good-news"
        } else if (messageStatus === "error") {
            return "bad-news"
        } else {
            return ""
        }
    }

    function messenger() {
        if (messageStatus === "success") {
            return "Name has successfully been saved"
        } else if (messageStatus === "error") {
            return "Name could not be saved"
        }
    }

    return (

        <section className="orange-border card-type-container">
            <header className="deck-editor-title">
                <h1>Deck editor</h1>
                <Button buttonContent="Save" onClick={() => navigate("/")}></Button>
            </header>
            <section className="pink-border card-type-dropdown-flow">
                <Veil>
                    <div className="green-border dropdown-menu-container">
                        <DropdownDetailSummary
                            /*summaryLeft={deck?.deckName}*/
                            value={deckName}
                            onChange={(e) => setDeckName(e.target.value)}
                            onClick={() => patchDeckName(deckId, deckName)}
                            disabled={isUnchanged}
                            className={isUnchanged ? "disabled-button" : "button"}
                            messageClassName={messageClassName()}
                            messageChildren={<p>{messenger()}</p>}

                        >
                            <div>
                                {deckData.map(card => {

                                    const entry = deckEntries.find(
                                        e => e.cardId === card.id
                                    );

                                    if (!entry) return null;

                                    const amount = entry.cardAmount;

                                    return (
                                        <div key={card.id}>
                                            <CardListItem
                                                cardName={card.name}
                                                cardAmount={amount}
                                                onClickPlus={() => updateAmountInDeck(entry.id, +1)}
                                                onClickMinus={() => updateAmountInDeck(entry.id, -1)}
                                                onClickTrash={() => deleteDeckEntry(entry.id)}
                                                lightBoxSource={
                                                    card.image_uris?.png ??
                                                    card.card_faces?.[0]?.image_uris?.png
                                                }
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="deck-management">
                                <div className="deck-management-line-container">
                                    <p>Cards in deck: </p>
                                    <CounterBox cardAmount={cardsInDeck} className="card-total"/>
                                </div>
                                <div className="deck-management-line-container">
                                    <p>Delete deck</p>
                                    <ButtonSmall
                                        buttonContent={<TrashIcon className="trash-icon"/>}
                                        className="button-minus-round"
                                        onClick={() => deleteDeck(deckId)}
                                    />
                                </div>
                            </div>
                        </DropdownDetailSummary>

                    </div>
                </Veil>
            </section>
        </section>
    )
}

export default DeckEditWindow