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

function Collection() {

    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const [data, setData] = useState([]);
    /*  const [cardColor, setCardColor] = useState("");
      const [cardType, setCardType] = useState("");
      const [sortType, setSortType] = useState("name");
      const [sortDir, setSortDir] = useState("asc");
      const [searchTerm, setSearchTerm] = useState("");
      const [cmcRange, setCmcRange] = useState([0, 16]);*/
    const [userCollection, setUserCollection] = useState([]);
    const [entry, setEntry] = useState([])
    const [userId, setUserId] = useState(null)


    /*console.log(userId)*/


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
            console.log(noviResponse)

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

    async function fetchCard(signal,cardId) {
        toggleError(false);
        toggleLoading(true);

        try {
            const scryfallResponse = await axios.get(`https://api.scryfall.com/cards/${cardId}`, {
                signal,
            })

            setData(scryfallResponse.data)
            console.log(scryfallResponse)

        } catch (error) {
            toggleError(true)
            console.error("kapot")
        } finally {
            toggleLoading(false)
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

    useEffect(() => {
        const controller = new AbortController();
        if (userCollection.length === 0) return;
        /*fetchCard(controller.signal);*/
        userCollection.map((entry) => {
            fetchCard(controller.signal, entry.cardId)
        })

        return () => {
            controller.abort();
        }
    }, [userCollection]);

    return (

        <CardSearch>
            {/*<Card cardImage={data.image_uris?.png ?? data.card_faces?.[0]?.image_uris?.png}
                  management={<CardManagement
                      lightBoxSource={data.image_uris?.png ?? data.card_faces?.[0]?.image_uris?.png}>
                      <ButtonAdd/>
                  </CardManagement>} cardImageAlt={data.name}
            />*/}
            {/*{loading ? <p>Loading...</p> :
                error ? <p>Sorry, we were unable to find your cards</p> : data.map((entry) => (
                    <div key={data.id}>
                        <Card cardImage={data.image_uris?.png ?? data.card_faces?.[entry]?.image_uris?.png}
                              management={<CardManagement
                                  lightBoxSource={data.image_uris?.png ?? data.card_faces?.[entry]?.image_uris?.png}>
                                  <ButtonAdd/>
                              </CardManagement>} cardImageAlt={data.name}
                        />
                    </div>
                ))
            }*/}

        </CardSearch>
    )
}

export default Collection