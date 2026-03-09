import {createContext, useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthContextProvider.jsx";
import axios from "axios";
import {useParams} from "react-router-dom";

export const CollectionContext = createContext({})


function CollectionContextProvider({children}) {

    const [data, setData] = useState([]);
    const [userCollection, setUserCollection] = useState([]);
    const [userDecks, setUserDecks] = useState([]);
    const [collectionId, setCollectionId] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const {user} = useContext(AuthContext);
    const userId = user?.id;
    const {token} = useContext(AuthContext);
    const {deckId} = useParams();
    const noviId = 'b8985a1c-c1b7-4c00-9777-666019e0877d';

    function updateAmount(entryId, delta) {

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

    function addCard(card) {
        if (!collectionId) return;
        console.log("Card clicked:", card.id);
        const inCollection = userCollection.find((entry) => {
            return card.id === entry.cardId
        });
        if (inCollection) {
            console.log("already in collection")
            updateAmount(inCollection.id, +1)
        } else if (!inCollection) {
            console.log("not in collection")
            postEntry(card.id)
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

    useEffect(() => {
        const controller = new AbortController();
        if (userCollection.length === 0) {
            setData([]);
            return;
        }


        async function fetchCollection() {

            try {
                toggleError(false);


                const identifiers = userCollection
                    .filter(entry => entry.cardId)
                    .map(entry => ({id: entry.cardId}));

                const scryfallResponse = await axios.post(
                    `https://api.scryfall.com/cards/collection`,
                    {identifiers},
                    {signal: controller.signal}
                );

                setData(scryfallResponse.data.data)
                /*console.log(scryfallResponse)*/

            } catch (error) {
                toggleError(true)
                console.error("kapot")
            } finally {

            }
        }

        fetchCollection();

        return () => controller.abort();
    }, [userCollection]);

    async function patchCollectionEntry(amount, entryId) {

        console.log(userCollection)

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
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
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




        async function fetchDecks() {

            try {
                const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/${userId}/userDecks`, {
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

        async function fetchDeckEntries(){

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/userDecks/${deckId}/deckEntries`, {
                headers: {
                    'novi-education-project-id': noviId,
                    Authorization: `Bearer ${token}`
                },
            })

        } catch(error) {
            console.log('Sorry, we could find your cards');
        }
        }

    useEffect(() => {

        if (!userId) {
            setUserCollection([]);
            setData([]);
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

    const collectionData = {
        userCollection,
        setUserCollection,
        userDecks,
        data,
        setData,
        loading,
        error,
        addCard,
        updateAmount,
        deleteEntry,
        collectionId
    };

    return (

        <CollectionContext.Provider value={collectionData}>
            {children}
        </CollectionContext.Provider>


    );
}

export default CollectionContextProvider