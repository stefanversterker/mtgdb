import './DeckEditWindow.css'
import Veil from "../Veil/Veil.jsx";
import DropdownDetailSummary from "../DropdownDetailSummary/DropdownDetailSummary.jsx";
import CardListItem from "../CardListItem/CardListItem.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom";

function DeckEditWindow() {

    const navigate = useNavigate();

    return (

        <section className="orange-border card-type-container">
            <header className="deck-editor-title">
                <h1>Deck editor</h1>
                <Button buttonContent="Save" onClick={ () => navigate("/")}></Button>
            </header>
            <section>
                <Veil>
                    <DropdownDetailSummary summaryLeft="Deck stats"> Snazzy mana curve graph</DropdownDetailSummary>
                </Veil>
            </section>
            <section className="pink-border card-type-dropdown-flow">
                <Veil>
                <div className="green-border dropdown-menu-container">
                    <DropdownDetailSummary summaryLeft="Deck" summaryRight={<CounterBox cardAmount="8"/>}>
                        <CardListItem cardName="Jet Medallion"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="The Rack"
                                      cardAmount="2"
                        />
                        <CardListItem cardName="Hypnotic Specter"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Sengir Vampire"
                                      cardAmount="2"
                        />
                        <CardListItem cardName="Megrim"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Liliana's Caress"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Megrim"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Liliana's Caress"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Dark Ritual"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Terror"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Swamp"
                                      cardAmount="20"
                        />
                        <CardListItem cardName="Lake of the Dead"
                                      cardAmount="2"
                        />
                        <CardListItem cardName="Liliana of the Dark Realms"
                                      cardAmount="2"
                        />
                        <CardListItem cardName="Stupor"
                                      cardAmount="4"
                        />
                        <CardListItem cardName="Ostracise"
                                      cardAmount="4"
                        />
                    </DropdownDetailSummary>

                </div>
            </Veil></section>
        </section>
    )
}

export default DeckEditWindow