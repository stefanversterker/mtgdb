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

function Collection() {

    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const [data, setData] = useState([]);
    const [cardColor, setCardColor] = useState("");
    const [cardType, setCardType] = useState("");
    const [sortType, setSortType] = useState("name");
    const [sortDir, setSortDir] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");
    const [cmcRange, setCmcRange] = useState([0, 16]);
    const [idFromNovi, setIdFromNovi] =useState([]);

    async function fetchCardId(signal) {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/userCollections/1/collectionEntries', {
                signal,
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })

            setIdFromNovi(response.data);
            console.log(response)

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

    async function fetchCard(signal) {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`https://api.scryfall.com/cards/${idFromNovi[0]?.cardId}`, {
                signal,
            })

            setData(response.data)
            console.log(response)

        }
        catch(error) {
            toggleError(true)
        }
        finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        void fetchCardId(controller.signal);

        return () => {
            controller.abort();
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        void fetchCard(controller.signal);

        return () => {
            controller.abort();
        }
    }, [idFromNovi]);

    return (

        <CardSearch /*displayTitle="Card Database"
                    cardType={cardType}
                    cardColor={cardColor}
                    sortType={sortType}
                    sortDir={sortDir}
                    cmcRange={cmcRange}
                    searchTerm={searchTerm}
                    setCardColor={setCardColor}
                    setCardType={setCardType}
                    setSortType={setSortType}
                    setSortDir={setSortDir}
                    setSearchTerm={setSearchTerm}
                    setCmcRange={setCmcRange}
                    prevClick={() => setPage(page => page - 1)}
                    nextClick={() => setPage(page => page + 1)}
                    prevDisabled={page === 1}
                    nextDisabled={hasMore === false}
                    prevButtonClass={page === 1 ? "disabled-button" : "paginating-button"}
                    nextButtonClass={hasMore ? "paginating-button" : "disabled-button"}*/
        >

            <Card cardImage={data.image_uris?.png ?? data.card_faces?.[0]?.image_uris?.png}
                  management={<CardManagement
                      lightBoxSource={data.image_uris?.png ?? data.card_faces?.[0]?.image_uris?.png}>
                      <ButtonAdd/>
                  </CardManagement>} cardImageAlt={data.name}
            />

            {/*{loading ? <p>Loading...</p> :
                error ? <p>Sorry, we were unable to find your cards</p> : data.map((card) => (
                    <div key={card.id}>
                        <Card cardImage={card.image_uris?.png ?? card.card_faces?.[0]?.image_uris?.png}
                              management={<CardManagement
                                  lightBoxSource={card.image_uris?.png ?? card.card_faces?.[0]?.image_uris?.png}>
                                  <ButtonAdd/>
                              </CardManagement>} cardImageAlt={card.name}
                        />
                    </div>
                ))
            }*/}
        </CardSearch>
    )
}

export default Collection