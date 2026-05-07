import './CardDatabase.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import {useNavigate} from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import axios from 'axios';
import {useState} from 'react'
import {useEffect} from 'react'
import queryBuilder from '/src/Helpers/queryBuilder.js'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import Message from "../Message/Message.jsx";


function CardDatabase({onClickAdd}) {

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
                error ? <Message className="bad-news">No such card, please broaden your
                    search</Message> : data.map((card) => (
                    <ul key={card.id}>
                        <li>
                            <Card cardImage={card.image_uris?.png ?? card.card_faces?.[0]?.image_uris?.png}
                                  management={<CardManagement
                                      lightBoxSource={card.image_uris?.png ?? card.card_faces?.[0]?.image_uris?.png}>
                                      <ButtonSmall buttonContent="Add"
                                                   className="button-small add-button"
                                                   onClick={() => onClickAdd(card)}
                                      />
                                  </CardManagement>} cardImageAlt={card.name}
                            />
                        </li>
                    </ul>
                ))
            }
        </CardSearch>

    )
}

export default CardDatabase