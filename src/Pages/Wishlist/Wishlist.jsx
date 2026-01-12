import './Wishlist.css'
import CardTypeDropdown from "../../Components/CardTypeDropdown/CardTypeDropdown.jsx";
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import Card from "../../Components/Card/Card.jsx";
import ButtonMagnify from "../../Components/ButtonMagnify/ButtonMagnify.jsx";
import icy_manipulator from "../../assets/testcards/icy_manipulator__s6__cn249_lnen.jpg";
/*import { Routes, Route } from 'react-router-dom';*/

function Wishlist() {
    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Wishlist">
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

export default Wishlist