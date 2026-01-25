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
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><ButtonAdd/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
            </CardSearch>
            <CardSearch displayTitle="Collection editor" button={<Button buttonContent="Save" onClick={ () => navigate("/")}/>}>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
                <Card management={<CardManagement><CardCounter></CardCounter><ButtonMagnify/></CardManagement>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </Card>
            </CardSearch>
        </main>
    )
}

export default CollectionEditor