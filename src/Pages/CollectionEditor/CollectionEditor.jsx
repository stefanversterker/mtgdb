import './CollectionEditor.css'
import CardDatabase from "../../Components/CardDatabase/CardDatabase.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import Collection from "../../Components/Collection/Collection.jsx";
import {useNavigate} from "react-router-dom";
import CounterBox from "../../Components/CounterBox/CounterBox.jsx";
import ButtonSmall from "../../Components/ButtonSmall/ButtonSmall.jsx";
import TrashIcon from "/src/assets/symbols/trash.svg?react";
import {useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

function CollectionEditor() {
    const navigate = useNavigate();
    const [userCollection, setUserCollection] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const [collectionId, setCollectionId] = useState(null)
    const [userId, setUserId] = useState(null)

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
                    ? { ...entry, cardAmount: newAmount }
                    : entry
            )
        );

        patchCollectionEntry(newAmount, entryId);
    }

    function addCard(card) {
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
        toggleError(false);
        toggleLoading(true);
        if (!userId) return;

        try {
            const noviResponse = await axios.get(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/userCollections/${userId}/`, {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })

            setCollectionId(noviResponse.data.id);
            console.log(noviResponse.data.id)

        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                return;
            }
            console.error("Whoops, we couldn't find your collectionId")
            toggleError(true)

        } finally {
            toggleLoading(false)
        }
    }

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
    }

    async function postEntry(cardId) {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries`, {
                    collectionId: collectionId,
                    cardId: cardId,
                    cardAmount: 1
                },
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
            console.log(response.data);
            console.log(response.status);
            setUserCollection(prev => [...prev, response.data]);
        } catch (error) {
            console.log('Sorry, we could not add this card to your collection');
        } finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        const decoded = jwtDecode(token);
        setUserId(decoded.userId);
    }, []);

    useEffect(() => {
        if (!userId) return;
        fetchCollectionId();
    }, [userId]);

    return (

        <main className="main-container blue-border">
            {console.log(collectionId)}
            <CardDatabase onClickAdd={addCard}/>
            <Collection
                headerButtonContent="Save collection"
                headerButtonClick={() => navigate("/")}
                userCollection={userCollection}
                setUserCollection={setUserCollection}
                updateAmount={updateAmount}
                userId={userId} setUserId={setUserId}

            >
                {({amount, increaseAmount, decreaseAmount, deleteEntry}) =>(
                <div className="card-counter-box">
                    <div>
                        {
                            amount > 1 ? (
                            <ButtonSmall
                                buttonContent="-"
                                className="button-minus"
                                onClick={decreaseAmount}
                            />
                        ) : (
                            <ButtonSmall
                                buttonContent={<TrashIcon className="trash-icon"/>}
                                className="button-minus" onClick={deleteEntry}
                            />
                        )}
                    </div>
                    <ButtonSmall
                        buttonContent="+"
                        className="button-plus"
                        onClick={increaseAmount}
                    />
                </div>
                )}
            </Collection>
        </main>
    )
}

export default CollectionEditor