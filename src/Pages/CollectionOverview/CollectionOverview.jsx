import './CollectionOverview.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import CardInCollection from "../../Components/CardInCollection/CardInCollection.jsx";
import icy_manipulator from "/src/assets/testcards/icy_manipulator__s6__cn249_lnen.jpg"
import CardInDataBase from "../../Components/CardInDataBase/CardInDataBase.jsx";
import Button from "../../Components/Button/Button.jsx";
/*import { Routes, Route } from 'react-router-dom';*/
import { useNavigate } from "react-router-dom";

function CollectionOverview() {

    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Collection" button={<Button buttonContent="Edit" onClick={ () => navigate("/collection-editor")}/>}>
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
        </main>
    )
}

export default CollectionOverview