import './DeckEditWindow.css'
import Veil from "../Veil/Veil.jsx";
import CardTypeDropdown from "../CardTypeDropdown/CardTypeDropdown.jsx";
import CardListItem from "../CardListItem/CardListItem.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";
import CardManagement from "../CardManagement/CardManagement.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom";

/*import { Routes, Route } from 'react-router-dom';*/

function DeckEditWindow() {

    const navigate = useNavigate();

    return (

        <section className="orange-border card-type-container">
            <header className="deck-editor-title">
                <h2>Deck editor</h2>
                <Button buttonContent="Save" onClick={ () => navigate("/decks-overview")}></Button>
            </header>
            <section>
                <Veil>
                    <CardTypeDropdown cardType="Deck stats"> Nifty mana curve graph</CardTypeDropdown>
                </Veil>
            </section>
            <section className="pink-border card-type-dropdown-flow">
                <Veil>
                <div className="green-border dropdown-menu-container">
                    <CardTypeDropdown cardType="Artifacts" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Jet Medallion" management={<CardManagement
                            counter={<CardCounter cardAmount="4"/>}/>}></CardListItem>
                        <CardListItem cardName="The Rack" management={<CardManagement
                            counter={<CardCounter cardAmount="2"/>}/>}></CardListItem>
                    </CardTypeDropdown>

                   <CardTypeDropdown cardType="Creatures" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Hypnotic Specter" management={<CardManagement
                            counter={<CardCounter cardAmount="4"/>}/>}></CardListItem>
                        <CardListItem cardName="Sengir Vampire" management={<CardManagement
                            counter={<CardCounter cardAmount="2"/>}/>}></CardListItem>
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Enchantments" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Megrim" management={<CardManagement
                            counter={<CardCounter cardAmount="4"/>}/>}></CardListItem>
                        <CardListItem cardName="Liliana's Caress" management={<CardManagement
                            counter={<CardCounter cardAmount="4"/>}/>}></CardListItem>
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Instants" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Dark Ritual" management={<CardManagement
                            counter={<CardCounter cardAmount="4"/>}/>}></CardListItem>
                        <CardListItem cardName="Terror" management={<CardManagement
                            counter={<CardCounter cardAmount="4"/>}/>}></CardListItem>
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Lands" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Swamp" management={<CardManagement
                            counter={<CardCounter cardAmount="20"/>}/>}></CardListItem>
                        <CardListItem cardName="Lake of the Dead" management={<CardManagement
                            counter={<CardCounter cardAmount="2"/>}/>}></CardListItem>
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Plainswalkers" counter={<CardCounter cardAmount="2"/>}>
                        <CardListItem cardName="Liliana of the Dark Realms" management={<CardManagement
                            counter={<CardCounter cardAmount="2"/>}/>}></CardListItem>
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Sorceries" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Stupor" management={<CardManagement
                            counter={<CardCounter cardAmount="4"/>}/>}></CardListItem>
                        <CardListItem cardName="Ostracise" management={<CardManagement
                            counter={<CardCounter cardAmount="4"/>}/>}></CardListItem>
                    </CardTypeDropdown>
                </div>
            </Veil></section>
        </section>
    )
}

export default DeckEditWindow