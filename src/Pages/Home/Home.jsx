import './Home.css'
/*import Veil from "../../Components/Veil/Veil.jsx";*/
import Input from "../../Components/Input/Input.jsx";
import Dropdown from "../../Components/Dropdown/Dropdown.jsx";
import CardSearch from "../../Components/CardSearch/CardSearch.jsx";
import icy_manipulator from "/src/assets/testcards/icy_manipulator__s6__cn249_lnen.jpg"
import lake_of_the_dead from "/src/assets/testcards/lake_of_the_dead__s46__cn140_lnen.jpg"
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import CounterBox from "../../Components/CounterBox/CounterBox.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Button from "../../Components/Button/Button.jsx";
import {NavLink} from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import ButtonMagnify from "../../Components/ButtonMagnify/ButtonMagnify.jsx";
import DeckContainer from "../../Components/DeckContainer/DeckContainer.jsx";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import Welcome from "../../Components/Welcome/Welcome.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function Home() {

    const navigate = useNavigate();
    const [loggedIn, toggleLoggedIn] = useState(false)

    function logInOut() {
        if (loggedIn) {
            toggleLoggedIn(false)
            console.log(loggedIn)
        } else if (!loggedIn) {
            toggleLoggedIn(true)
            console.log(loggedIn)
        }
    }

    return (

        <div className="main-container blue-border">
            <Button buttonContent="l" onClick={() => {logInOut()}}/>
            {!loggedIn ?
            <Welcome/>
                :
            <section className="main-container">
                <CardSearch displayTitle="My Collection"
                           button={<Button buttonContent="Edit" onClick={() => navigate("/collection-editor")}/>}>
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
                <div className="decks-overview-container green-border">
                    <header className="decks-header orange-border">
                        <h1>My Decks</h1>
                        <Button buttonContent="New deck"></Button>
                    </header>
                    <article className="decks-flow-container pink-border">
                        <Veil>
                            <ul className="orange-border decks-flow">
                                <DeckContainer deckName="Boerenkool met worst" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="My Brain Hurts" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="Elves and Dragons" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="Disposablito" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="You're still here...why?" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="Wear your brown trousers" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="You fight like a dairy farmer" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="Run forest, RUN!" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="Teenage mutant ninja goblins" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="Hold my beer" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="This might sting a little" cardAmount="60"></DeckContainer>
                                <DeckContainer deckName="Deck the halls with boughs of holly" cardAmount="60"></DeckContainer>
                            </ul>
                        </Veil>
                    </article>
                </div>
            </section>}
        </div>
    )
}

export default Home