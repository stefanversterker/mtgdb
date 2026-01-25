import './CollectionEditor.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import icy_manipulator from "../../assets/testcards/icy_manipulator__s6__cn249_lnen.jpg";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import lake_of_the_dead from "../../assets/testcards/lake_of_the_dead__s46__cn140_lnen.jpg";
import Button from "../../Components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import ButtonMagnify from "../../Components/ButtonMagnify/ButtonMagnify.jsx";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";

function CollectionEditor() {

    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Card Database">
                <Card
                    management={<CardManagement lightBoxSource={icy_manipulator}><ButtonAdd/></CardManagement>}
                    cardImage={icy_manipulator}
                    cardImageAlt="blah"
                />
            </CardSearch>
            <CardSearch displayTitle="Collection editor" button={<Button buttonContent="Save" onClick={ () => navigate("/")}/>}>
                <Card management={<CardManagement lightBoxSource={lake_of_the_dead}><CardCounter/></CardManagement>}
                      cardImage={lake_of_the_dead}
                      cardImageAlt="blah"
                />

            </CardSearch>
        </main>
    )
}

export default CollectionEditor