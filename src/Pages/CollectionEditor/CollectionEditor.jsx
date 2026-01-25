import './CollectionEditor.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import icy_manipulator from "../../assets/testcards/icy_manipulator__s6__cn249_lnen.jpg";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import lake_of_the_dead from "../../assets/testcards/lake_of_the_dead__s46__cn140_lnen.jpg";
import Button from "../../Components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import ButtonMagnify from "../../Components/ButtonMagnify/ButtonMagnify.jsx";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import axios from 'axios';
import {useState} from 'react'
import {useEffect} from 'react'

function CollectionEditor() {

    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const [data, setData] = useState([]);

    async function fetchCard() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('https://api.scryfall.com/cards/bfd891ba-cf6a-4b83-a421-3a7c346ada31', {

            })
            setData(response.data);
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
    }, [])

    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Card Database">
                <Card
                    management={<CardManagement lightBoxSource={data.image_uris.png}><ButtonAdd/></CardManagement>}
                    cardImage={data.image_uris.png}
                    cardImageAlt="blah"
                />
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