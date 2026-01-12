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
                <h1>Deck editor</h1>
                <Button buttonContent="Save" onClick={ () => navigate("/decks-overview")}></Button>
            </header>
            <section>
                <Veil>
                    <CardTypeDropdown cardType="Deck stats"> Snazzy mana curve graph</CardTypeDropdown>
                </Veil>
            </section>
            <section className="pink-border card-type-dropdown-flow">
                <Veil>
                <div className="green-border dropdown-menu-container">
                    <CardTypeDropdown cardType="Artifacts" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Jet Medallion"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="The Rack"
                                      cardAmount="2"
                        />
                    </CardTypeDropdown>

                   <CardTypeDropdown cardType="Creatures" counter={<CardCounter cardAmount="8"/>}>
                       <CardListItem cardName="Hypnotic Specter"
                                     cardAmount="4"
                       />
                       <CardListItem cardName="Sengir Vampire"
                                     cardAmount="2"
                       />
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Enchantments" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Megrim"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Liliana's Caress"
                                      cardAmount="4"
                        />
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Instants" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Dark Ritual"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Terror"
                                      cardAmount="4"
                        />
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Lands" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Swamp"
                                      cardAmount="20"
                        />
                        <CardListItem cardName="Lake of the Dead"
                                      cardAmount="2"
                        />
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Plainswalkers" counter={<CardCounter cardAmount="2"/>}>
                        <CardListItem cardName="Liliana of the Dark Realms"
                                      cardAmount="2"
                        />
                    </CardTypeDropdown>

                    <CardTypeDropdown cardType="Sorceries" counter={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Stupor"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Ostracise"
                                      cardAmount="4"
                        />
                    </CardTypeDropdown>
                </div>
            </Veil></section>
        </section>
    )
}

export default DeckEditWindow