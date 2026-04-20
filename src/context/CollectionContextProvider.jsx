import {createContext, useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthContextProvider.jsx";
import {useNoviId} from "./NoviIdProvider.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CollectionContext = createContext({})


function CollectionContextProvider({children}) {

    const [userCollectionData, setUserCollectionData] = useState([]); //collection data from novi backend
    const [deckData, setDeckData] = useState([]); //full data object from scryfall for each card in a single deck
    const [userCollection, setUserCollection] = useState([]); //
    const [userDecks, setUserDecks] = useState([]); //all decks that belong to a user id. Includes deck id and deck name.
    const [deckEntries, setDeckEntries] = useState([]); //
    const [collectionId, setCollectionId] = useState(null);
    const [messageStatus, setMessageStatus] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const {user} = useContext(AuthContext);
    const userId = user?.id;
    const {token} = useContext(AuthContext);
    /*const noviId = 'b8985a1c-c1b7-4c00-9777-666019e0877d';*/
    const {noviId} = useNoviId()
    const navigate = useNavigate();
    const cardsInDeck = deckEntries.reduce(
        (total, entry) => total + entry.cardAmount,
        0
    );


    function updateAmountInCollection(entryId, delta) {

        const userEntry = userCollection.find((entry) => entry.id === entryId);

        if (!userEntry) return;
        const newAmount = userEntry.cardAmount + delta;

        if (newAmount < 1) {
            deleteEntry(entryId);
            return;
        }

        setUserCollection(previousCollection =>
            previousCollection.map((entry) =>
                entry.id === entryId
                    ? {...entry, cardAmount: newAmount}
                    : entry
            )
        );

        patchCollectionEntry(newAmount, entryId);
    }

    function updateAmountInDeck(entryId, delta) {

        const userEntry = deckEntries.find((entry) => entry.id === entryId);

        if (!userEntry) return;
        const newAmount = userEntry.cardAmount + delta;

        if (newAmount < 1) {
            deleteEntry(entryId);
            return;
        }

        setDeckEntries(previousCollection =>
            previousCollection.map((entry) =>
                entry.id === entryId
                    ? {...entry, cardAmount: newAmount}
                    : entry
            )
        );

        patchDeckEntry(newAmount, entryId);
    }

    function addCard(card) {
        if (!collectionId) return;
        /*console.log("Card clicked:", card.id);*/
        const inCollection = userCollection.find((entry) => {
            return card.id === entry.cardId
        });
        if (inCollection) {
            console.log("already in collection")
            updateAmountInCollection(inCollection.id, +1)
        } else if (!inCollection) {
            console.log("not in collection")
            postEntry(card.id)
        }
    }

    function addCardToDeck(card, deckId) {
        if (!collectionId) return;
        /*console.log("Card clicked:", card.id);*/
        const inDeck = deckEntries.find((entry) => {
            return card.id === entry.cardId
        });
        if (inDeck) {
            console.log("already in deck")
            updateAmountInDeck(inDeck.id, +1)
        } else if (!inDeck) {
            console.log("not in deck")
            postDeckEntry(card.id, deckId)
        }
    }

    async function fetchCollectionId() {
        if (!userId) return;
        toggleError(false);

        try {
            const noviResponse = await axios.get(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/userCollections/${userId}/`, {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                })

            setCollectionId(noviResponse?.data.id);
            /*console.log(noviResponse?.data.id)*/

        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                return;
            }
            console.error("Whoops, we couldn't find your collectionId")
            toggleError(true)

        } finally {

        }
    }

    async function fetchCardId(signal) {
        toggleError(false);

        try {
            const noviResponse = await axios.get(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/userCollections/${userId}/collectionEntries`, {
                    signal,
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                })

            setUserCollection(noviResponse.data);
            /*console.log(noviResponse.data)*/

        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                return;
            }
            console.error("Whoops, we couldn't find your card")
            toggleError(true)

        } finally {

        }
    }

    async function fetchCollection(cardList, signal, setTargetData, source) {

        try {
            toggleError(false);

            if (!cardList || cardList.length === 0) {
                setTargetData([]);
                return;
            }

            /*console.log("cardList:", cardList);*/

            const identifiers = cardList
                .filter(entry =>
                    typeof entry.cardId === "string" &&
                    entry.cardId.includes("-")
                )
                .map(entry => ({id: entry.cardId}));

            /*console.log("FETCH SOURCE:", source);*/
            /*console.log("IDENTIFIERS:", identifiers);*/

            if (identifiers.length === 0) {
                setTargetData([]);
                return;
            }

            const scryfallResponse = await axios.post(
                `https://api.scryfall.com/cards/collection`,
                {identifiers},
                {signal}
            );

            setTargetData(scryfallResponse.data.data)

        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                return;
            }

            toggleError(true);
            console.error("kapot", error);
        } finally {

        }
    }

    useEffect(() => {
        const controller = new AbortController();
        if (userCollection.length === 0) {
            setUserCollectionData([]);
            return;
        }
        fetchCollection(userCollection, controller.signal, setUserCollectionData, "collection");
        return () => controller.abort();
    }, [userCollection]);


    useEffect(() => {
        const controller = new AbortController();
        if (deckEntries.length === 0) {
            setDeckData([]);
            return;
        }
        fetchCollection(deckEntries, controller.signal, setDeckData, "deck");
        return () => controller.abort();
    }, [deckEntries]);

    async function patchCollectionEntry(amount, entryId) {

        /*console.log(userCollection)*/

        try {

            await axios.patch(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries/${entryId}`,
                {
                    cardAmount: amount,
                },
                {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                },
            )

        } catch (error) {
            console.log('Sorry, we could not add this card to your collection');
        } finally {

        }
    }

    async function patchDeckEntry(amount, entryId) {

        try {

            await axios.patch(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/deckEntries/${entryId}`,
                {
                    cardAmount: amount,
                },
                {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                },
            )

        } catch (error) {
            console.log('Sorry, we could not add this card to your deck');
        } finally {

        }
    }

    async function patchDeckName(deckId, newName) {

        try {
            await axios.patch(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/userDecks/${deckId}`,
                {
                    deckName: newName,
                },
                {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    }
                },
            )

            /*setDeck(prev => ({ ...prev, deckName: newName }))*/
            setUserDecks(prev => {
                const updatedDecks = prev.map((deck) =>
                    deck.id === Number(deckId)
                        ? {...deck, deckName: newName}
                        : deck
                );

                setMessageStatus("success")

                /*console.log("updated decks:", updatedDecks);
                console.log("patchDeckName called", deckId, newName);*/

                return updatedDecks;
            });

            /*console.log("updated decks:", updatedDecks)*/

        } catch (error) {
            console.log("Sorry, deck name could not be changed")
            /*console.error(error.response);*/
            setMessageStatus("error")
        } finally {

        }
    }

    async function postEntry(cardId) {
        toggleError(false);


        try {
            const response = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries`, {
                    collectionId: collectionId,
                    cardId: cardId,
                    cardAmount: 1
                },
                {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                })
            /*console.log(response.data);*/
            /*console.log(response.status);*/
            setUserCollection(prev => [...prev, response.data]);
        } catch (error) {
            console.log('Sorry, we could not add this card to your collection');
        } finally {

        }
    }

    async function postDeckEntry(cardId, deckId) {
        toggleError(false);

        /*console.log(deckId)*/


        try {
            const response = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/deckEntries`, {
                    deckId: Number(deckId),
                    cardId: cardId,
                    cardAmount: 1
                },
                {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                })
            /*console.log(response.data);*/
            /*console.log(response.status);*/
            setDeckEntries(prev => [...prev, response.data]);
        } catch (error) {
            console.log('Sorry, we could not add this card to your deck');
            /*console.log(deckId)*/
        } finally {

        }
    }

    async function postNewDeck() {

        try {
            const response = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/userDecks`, {
                    userId: userId,
                    deckName: "--new deck",
                },
                {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                })

            setUserDecks(prev => [...prev, response.data])
        } catch (error) {
            console.log("No deck today, sorry")
        } finally {

        }
    }

    async function deleteDeck(deckId) {

        try {
            const response = await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/userDecks/${deckId}`, {
                headers: {
                    'novi-education-project-id': noviId,
                    Authorization: `Bearer ${token}`
                },
            })

            setUserDecks(prev =>
                prev.filter(deck => deck.id !== Number(deckId))
            )
            navigate("/")
        } catch (error) {
            console.log("Could not delete deck")
        } finally {

        }
    }

    async function deleteEntry(entryId) {

        try {
            await axios.delete(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries/${entryId}`,
                {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                },
            )

            setUserCollection(userCollection => {
                return userCollection.filter((entry) => entry.id !== entryId)
            })

        } catch (error) {
            console.log('Sorry, we could not delete this card');
        }
    }

    async function deleteDeckEntry(entryId) {

        try {
            await axios.delete(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/deckEntries/${entryId}`,
                {
                    headers: {
                        'novi-education-project-id': noviId,
                        Authorization: `Bearer ${token}`
                    },
                },
            )

            setDeckEntries(deckEntries => {
                return deckEntries.filter((entry) => entry.id !== entryId)
            })

        } catch (error) {
            console.log('Sorry, we could not delete this card');
        }
    }

    async function fetchDecks() {

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${userId}/userDecks`, {
                headers: {
                    'novi-education-project-id': noviId,
                    Authorization: `Bearer ${token}`
                },
            })

            setUserDecks(response.data)

        } catch (error) {
            console.log('Sorry, we could find your deck');
        } finally {

        }
    }

    async function fetchDeckEntries(deckId) {

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/userDecks/${deckId}/deckEntries`, {
                headers: {
                    'novi-education-project-id': noviId,
                    Authorization: `Bearer ${token}`
                },
            })
            setDeckEntries(response.data)
            /*console.log(response)*/
        } catch (error) {
            console.log('Sorry, we could find your cards');
            /*console.log(deckId)*/
        }
    }

    useEffect(() => {

        if (!userId) {
            setUserCollection([]);
            setUserCollectionData([]);
            setCollectionId(null);
            toggleLoading(false)
            return;
        }


        const controller = new AbortController();

        async function init() {
            toggleLoading(true);
            await fetchCollectionId();
            await fetchCardId(controller.signal);
            await fetchDecks();
            toggleLoading(false);
        }

        init();

        return () => {
            controller.abort();
        };
    }, [userId]);

    useEffect(() => {
        if (!messageStatus) return;

        const timer = setTimeout(() => {
            setMessageStatus(null);
        }, 3000);

        return () => clearTimeout(timer);
    }, [messageStatus]);


    const collectionData = {
        userCollection,
        setUserCollection,
        userDecks,
        fetchDeckEntries,
        deckEntries,
        cardsInDeck,
        userCollectionData,
        setUserCollectionData,
        deckData,
        setDeckData,
        loading,
        error,
        addCard,
        addCardToDeck,
        updateAmountInCollection,
        updateAmountInDeck,
        deleteEntry,
        deleteDeckEntry,
        collectionId,
        patchDeckName,
        messageStatus,
        postNewDeck,
        deleteDeck,
        userId,
        fetchCardId,
        fetchCollectionId,
    };

    return (

        <CollectionContext.Provider value={collectionData}>
            {children}
        </CollectionContext.Provider>


    );
}

export default CollectionContextProvider