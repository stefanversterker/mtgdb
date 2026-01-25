import './Wishlist.css'
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import CounterBox from "../../Components/CounterBox/CounterBox.jsx";
import Card from "../../Components/Card/Card.jsx";
import ButtonMagnify from "../../Components/ButtonMagnify/ButtonMagnify.jsx";
import icy_manipulator from "../../assets/testcards/icy_manipulator__s6__cn249_lnen.jpg";
/*import { Routes, Route } from 'react-router-dom';*/

function Wishlist() {
    return (

        <main className="main-container blue-border">
            <CardSearch displayTitle="Wishlist">
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
                <Card management={<CardManagement><CounterBox cardAmount="2"/><ButtonMagnify/></CardManagement>}>
                    <img src={icy_manipulator} alt="ijzige manipulator"/>
                </Card>
            </CardSearch>
        </main>
    )
}

export default Wishlist