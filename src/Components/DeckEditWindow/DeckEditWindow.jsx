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
    const {addCard, loading, userDecks, fetchDeckEntries, deckEntries, cardsInDeck, deckData, updateAmountInDeck, deleteDeckEntry, userEntry} = useContext(CollectionContext);
    const {deckId} = useParams();
    const deck = userDecks.find(d => d.id === Number(deckId));

    useEffect(() => {
        if (!deckId) return;
        fetchDeckEntries(deckId);

    }, [deckId]);

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
                            summaryLeft={deck?.deckName}
                            summaryRight={
                                <div className="deck-management">
                                    <CounterBox cardAmount={cardsInDeck}/>
                                    <ButtonSmall
                                        buttonContent={<TrashIcon className="trash-icon"/>}
                                        className="button-minus-round"
                                        /*onClick={deleteEntry}*/
                                    />
                                </div>
                            }
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

                        </DropdownDetailSummary>
                    </div>
                </Veil>
            </section>
        </section>
    )
}

export default DeckEditWindow