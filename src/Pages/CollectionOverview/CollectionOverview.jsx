import './CollectionOverview.css'
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import icy_manipulator from "/src/assets/testcards/icy_manipulator__s6__cn249_lnen.jpg"
import Button from "../../Components/Button/Button.jsx";
/*import { Routes, Route } from 'react-router-dom';*/
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd.jsx";
import ButtonMagnify from "../../Components/ButtonMagnify/ButtonMagnify.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";

function CollectionOverview() {

    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Collection" button={<Button buttonContent="Edit" onClick={ () => navigate("/collection-editor")}/>}>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CardCounter cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
            </CardSearch>
        </main>
    )
}

export default CollectionOverview