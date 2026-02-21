import './Collection.css'
import CardSearch from "../CardSearch/CardSearch.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import {useNavigate} from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd.jsx";
import axios from 'axios';
import {useState} from 'react'
import {useEffect} from 'react'
import queryBuilder from '/src/Helpers/queryBuilder.js'
import {jwtDecode} from "jwt-decode";
import CounterBox from "../CounterBox/CounterBox.jsx";
import Veil from "../Veil/Veil.jsx";
import Button from "../Button/Button.jsx";

function Collection({children, headerButtonClick, headerButtonContent, amount, renderExtra}) {

    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const [data, setData] = useState([]);
    const [userCollection, setUserCollection] = useState([]);
    const [entry, setEntry] = useState([])
    const [userId, setUserId] = useState(null)

    function increaseAmount() {
        console.log("increase")
    }

    function decreaseAmount() {
        console.log("decrease")
    }


    async function fetchCardId(signal) {
        toggleError(false);
        toggleLoading(true);

        try {
            const noviResponse = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/userCollections/${userId}/collectionEntries`, {
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

        async function fetchCollection(signal, cardId) {

            try {
                toggleError(false);
                toggleLoading(true);

                const identifiers = userCollection.map(entry => ({
                    id: entry.cardId
                }));

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

    async function patchCollectionEntry(){

        try {

            const entryPatch = await axios.patch(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries/${entryId}`,
                {

                },
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                },
            )
        } catch(error) {
            console.log('Sorry, we could not add this card to your collection');
        }

    }

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
                                                        increaseAmount,
                                                        decreaseAmount
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