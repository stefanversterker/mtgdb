import './DeckEditWindow.css'
import Veil from "../Veil/Veil.jsx";
import DropdownContainer from "../DropdownContainer/DropdownContainer.jsx";
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
                    <DropdownContainer summaryLeft="Deck stats"> Snazzy mana curve graph</DropdownContainer>
                </Veil>
            </section>
            <section className="pink-border card-type-dropdown-flow">
                <Veil>
                <div className="green-border dropdown-menu-container">
                    <DropdownContainer summaryLeft="Artifacts" summaryRight={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Jet Medallion"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="The Rack"
                                      cardAmount="2"
                        />
                    </DropdownContainer>

                   <DropdownContainer summaryLeft="Creatures" summaryRight={<CardCounter cardAmount="8"/>}>
                       <CardListItem cardName="Hypnotic Specter"
                                     cardAmount="4"
                       />
                       <CardListItem cardName="Sengir Vampire"
                                     cardAmount="2"
                       />
                    </DropdownContainer>

                    <DropdownContainer summaryLeft="Enchantments" summaryRight={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Megrim"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Liliana's Caress"
                                      cardAmount="4"
                        />
                    </DropdownContainer>

                    <DropdownContainer summaryLeft="Instants" summaryRight={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Dark Ritual"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Terror"
                                      cardAmount="4"
                        />
                    </DropdownContainer>

                    <DropdownContainer summaryLeft="Lands" summaryRight={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Swamp"
                                      cardAmount="20"
                        />
                        <CardListItem cardName="Lake of the Dead"
                                      cardAmount="2"
                        />
                    </DropdownContainer>

                    <DropdownContainer summaryLeft="Plainswalkers" summaryRight={<CardCounter cardAmount="2"/>}>
                        <CardListItem cardName="Liliana of the Dark Realms"
                                      cardAmount="2"
                        />
                    </DropdownContainer>

                    <DropdownContainer summaryLeft="Sorceries" summaryRight={<CardCounter cardAmount="8"/>}>
                        <CardListItem cardName="Stupor"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Ostracise"
                                      cardAmount="4"
                        />
                    </DropdownContainer>
                </div>
            </Veil></section>
        </section>
    )
}

export default DeckEditWindow