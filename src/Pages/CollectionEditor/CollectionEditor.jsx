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
    const [sortType, setSortType] = useState("");
    const [searchTerm, setSearchTerm] = useState("");


    /*function queryBuilder({ cardColor, cardType, searchTerm}) {
        const tokens = [];

        if (searchTerm) {
            tokens.push(searchTerm);
        }

        if (cardColor) {
            tokens.push(`c:${cardColor}`);
        }

        if (cardType) {
            tokens.push(`type:${cardType}`);
        }

        if (!cardType && !cardColor && !searchTerm) {
            tokens.push("game:paper");
        }
        return tokens.join (" ")
    }
*/


async function fetchCard() {
    toggleError(false);
    toggleLoading(true);

    const query = queryBuilder({cardColor, cardType, searchTerm})

    try {
        const response = await axios.get("https://api.scryfall.com/cards/search", {
            params: {
                q: query,
                order: sortType || undefined,
            }
        })
        setData(response.data.data);
        console.log(response.data);

    } catch (error) {
        console.error("Whoops, we couldn't find your card")
        toggleError(true)
    } finally {
        toggleLoading(false)
    }
}

useEffect(() => {
    void fetchCard();
}, [cardColor, cardType]);

return (

    <main className="main-container blue-border">
        <CardSearch displayTitle="Card Database"
                    cardType={cardType}
                    cardColor={cardColor}
                    sortType={sortType}
                    setCardColor={setCardColor}
                    setCardType={setCardType}
                    setSortType={setSortType}
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
        <CardSearch displayTitle="Collection editor"
                    button={<Button buttonContent="Save" onClick={() => navigate("/")}/>}>
            <Card management={<CardManagement lightBoxSource={lake_of_the_dead}><CardCounter/></CardManagement>}
                  cardImage={lake_of_the_dead}
                  cardImageAlt="blah"
            />

        </CardSearch>
    </main>
)
}

export default CollectionEditor