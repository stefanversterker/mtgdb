import './Collection.css'
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import Card from "../../Components/Card/Card.jsx";
import axios from 'axios';
import {useState} from 'react'
import {useEffect} from 'react'
import {jwtDecode} from "jwt-decode";
import CounterBox from "../CounterBox/CounterBox.jsx";
import Veil from "../Veil/Veil.jsx";
import Button from "../Button/Button.jsx";

function Collection({children, headerButtonClick, headerButtonContent, userCollection, setUserCollection, updateAmount}) {


    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const [data, setData] = useState([]);
    /*const [userCollection, setUserCollection] = useState([]);*/
    const [userId, setUserId] = useState(null)

    async function fetchCardId(signal) {
        toggleError(false);
        toggleLoading(true);

        try {
            const noviResponse = await axios.get(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/userCollections/${userId}/collectionEntries`, {
                    signal,
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })

            setUserCollection(noviResponse.data);
            /*console.log(noviResponse)*/

        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                return;
            }
            console.error("Whoops, we couldn't find your card")
            toggleError(true)

        } finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        if (userCollection.length === 0) return;

        async function fetchCollection() {

            try {
                toggleError(false);
                toggleLoading(true);

                const identifiers = userCollection
                    .filter(entry => entry.cardId)
                    .map(entry => ({ id: entry.cardId }));

                const scryfallResponse = await axios.post(
                    `https://api.scryfall.com/cards/collection`,
                    {identifiers},
                    {signal: controller.signal}
                );

                setData(scryfallResponse.data.data)
                console.log(scryfallResponse)

            } catch (error) {
                toggleError(true)
                console.error("kapot")
            } finally {
                toggleLoading(false)
            }
        }

        fetchCollection();

        return () => controller.abort();
    }, [userCollection]);

    /*function updateAmount(entryId, delta) {

        const userEntry = userCollection.find((entry) => entry.id === entryId);

        if (!userEntry) return;   // safety guard
        const newAmount = userEntry.cardAmount + delta;

        if (newAmount < 1) {
            deleteEntry(entryId);
            return;
        }

        setUserCollection(previousCollection =>
            previousCollection.map((entry) =>
                entry.id === entryId
                    ? { ...entry, cardAmount: newAmount }
                    : entry
            )
        );

        patchCollectionEntry(newAmount, entryId);
    }*/

    /*async function patchCollectionEntry(amount, entryId) {

        try {

            await axios.patch(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries/${entryId}`,
                {
                    cardAmount: amount,
                },
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                },
            )

        } catch (error) {
            console.log('Sorry, we could not add this card to your collection');
        } finally {
            toggleLoading(false)
        }
    }*/

    async function deleteEntry(entryId) {

        try {
            await axios.delete(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries/${entryId}`,
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
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

    /*async function postEntry() {
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries`, {
                    collectionId: "collectionId?",
                    card: "cardId?",
                    cardAmount: 1,
                },
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
        } catch (error) {
            console.log('Sorry, we could not add this card to your collection');
        } finally {
            toggleLoading(false)
        }
    }*/


    useEffect(() => {
        setUserId(jwtDecode(localStorage.getItem('token')).userId);
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        if (!userId) return;
        fetchCardId(controller.signal);

        return () => {
            controller.abort();
        }
    }, [userId]);



    return (

        <section className="collection-overview-container green-border">
            <header className="collection-header orange-border">
                <h1>Collection</h1>
                <Button buttonContent={headerButtonContent} onClick={headerButtonClick}/>
            </header>
            <div className="collection-flow-container pink-border">
                <Veil>
                    <div className="card-flow orange-border">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Sorry, we were unable to find your cards</p>
                        ) : (
                            data.map(card => {
                                const userEntry = userCollection.find(
                                    entry => entry.cardId === card.id
                                );

                                if(!userEntry) return null;

                                const amount = userEntry?.cardAmount ?? 0;

                                return (
                                    <div key={card.id}>
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
                                                        increaseAmount: () => updateAmount(userEntry.id, +1),
                                                        decreaseAmount: () => updateAmount(userEntry.id, -1),
                                                        deleteEntry: () => deleteEntry(userEntry.id),
                                                    }) : children}
                                                </CardManagement>
                                            }
                                            cardImageAlt={card.name}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                </Veil>
            </div>
        </section>

    )
}

export default Collection