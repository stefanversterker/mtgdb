import './CollectionEditor.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import lake_of_the_dead from "../../assets/testcards/lake_of_the_dead__s46__cn140_lnen.jpg";
import Button from "../../Components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import axios from 'axios';
import {useState} from 'react'
import {useEffect} from 'react'
import queryBuilder from '/src/Helpers/queryBuilder.js'


function CollectionEditor() {

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
            }
        })
        setData(response.data.data);

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

    return() => {
        controller.abort();
    }
}, [cardColor, cardType, sortType, sortDir, searchTerm, cmcRange]);

return (

    <main className="main-container blue-border">
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
        >
            {!error && data.map((card) => (
                <div key={card.id}>
                    <Card cardImage={card.image_uris?.png ?? card.card_faces?.[0]?.image_uris?.png}
                          management={<CardManagement
                              lightBoxSource={card.image_uris?.png ?? card.card_faces?.[0]?.image_uris?.png}>
                              <ButtonAdd/>
                          </CardManagement>} cardImageAlt={card.name}/>
                </div>
            ))}
        </CardSearch>
        {/*<CardSearch displayTitle="Collection editor"
                    button={<Button buttonContent="Save" onClick={() => navigate("/")}/>}>
            <Card management={<CardManagement lightBoxSource={lake_of_the_dead}><CardCounter/></CardManagement>}
                  cardImage={lake_of_the_dead}
                  cardImageAlt="bla"
            />

        </CardSearch>*/}
    </main>
)
}

export default CollectionEditor