import './CardDatabase.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import {useNavigate} from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd.jsx";
import axios from 'axios';
import {useState} from 'react'
import {useEffect} from 'react'
import queryBuilder from '/src/Helpers/queryBuilder.js'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";


function CardDatabase() {

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
    const [page, setPage] = useState(2)
    const [hasMore, setHasMore] = useState(true)

    async function fetchCard(signal) {
        toggleError(false);
        toggleLoading(true);

        const query = queryBuilder({cardColor, cardType, searchTerm, cmcRange})

        console.log(query);

        try {
            const response = await axios.get("https://api.scryfall.com/cards/search", {
                signal,
                params: {
                    q: query,
                    order: sortType || undefined,
                    dir: sortDir || undefined,
                    page: page,
                }
            })
            console.log("has_more:", response.data.has_more);
            setData(response.data.data);
            setHasMore(response.data.has_more)

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
        void fetchCard(controller.signal);

        return () => {
            controller.abort();
        }
    }, [cardColor, cardType, sortType, sortDir, searchTerm, cmcRange, page]);

    useEffect(() => {
        if (page !== 1) {
            setPage(1);
        }
    }, [cardColor, cardType, sortType, sortDir, searchTerm, cmcRange])

    async function postEntry() {
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/collectionEntries`, {
                    id: id,
                    collectionId: collectioId,
                    card: cardId,
                    cardAmount: cardAmount,
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
    }

    return (


        <CardSearch displayTitle="Card Database"
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
                    nextButtonClass={hasMore ? "paginating-button" : "disabled-button"}
        >

            {loading ? <p>Loading...</p> :
                error ? <p>Sorry, we were unable to find your cards</p> : data.map((card) => (
                    <div key={card.id}>
                        <Card cardImage={card.image_uris?.png ?? card.card_faces?.[0]?.image_uris?.png}
                              management={<CardManagement
                                  lightBoxSource={card.image_uris?.png ?? card.card_faces?.[0]?.image_uris?.png}>
                                  <ButtonSmall buttonContent="Add"
                                               className="button-small add-button"
                                      /*onClick={}*/
                                  />
                              </CardManagement>} cardImageAlt={card.name}
                        />
                    </div>
                ))
            }
        </CardSearch>

    )
}

export default CardDatabase