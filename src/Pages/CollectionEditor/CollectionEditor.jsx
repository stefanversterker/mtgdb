import './CollectionEditor.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import CardInDataBase from "../../Components/CardInDataBase/CardInDataBase.jsx";
import icy_manipulator from "../../assets/testcards/icy_manipulator__s6__cn249_lnen.jpg";
import CardInCollection from "../../Components/CardInCollection/CardInCollection.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import lake_of_the_dead from "../../assets/testcards/lake_of_the_dead__s46__cn140_lnen.jpg";
import Button from "../../Components/Button/Button.jsx";
/*import { Routes, Route } from 'react-router-dom';*/
import { useNavigate } from "react-router-dom";

function CollectionEditor() {

    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Card Database">
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
                <CardInDataBase>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </CardInDataBase>
            </CardSearch>
            <CardSearch displayTitle="Collection editor" button={<Button buttonContent="Save" onClick={ () => navigate("/collection-overview")}/>}>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="1"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="5"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="2"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="6"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="4"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="2"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
                <CardInCollection management={<CardManagement counter={<CardCounter cardAmount="3"/>}/>}>
                    <img src={lake_of_the_dead} alt="meer des doods"/>
                </CardInCollection>
            </CardSearch>
        </main>
    )
}

export default CollectionEditor