import './DeckEditWindow.css'
import Veil from "../Veil/Veil.jsx";
import DropdownDetailSummary from "../DropdownDetailSummary/DropdownDetailSummary.jsx";
import CardListItem from "../CardListItem/CardListItem.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx";
import Button from "../Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import TrashIcon from "/src/assets/symbols/trash.svg?react";

function DeckEditWindow() {

    const navigate = useNavigate();

    return (

        <section className="orange-border card-type-container">
            <header className="deck-editor-title">
                <h1>Deck editor</h1>
                <Button buttonContent="Save" onClick={() => navigate("/")}></Button>
            </header>
            <section className="pink-border card-type-dropdown-flow">
                <Veil>
                    <div className="green-border dropdown-menu-container">
                        <DropdownDetailSummary
                            summaryLeft="Deck"
                            summaryRight={
                                <div className="deck-management">
                                    <CounterBox cardAmount="8"/>
                                    <ButtonSmall
                                        buttonContent={<TrashIcon className="trash-icon"/>}
                                        className="button-minus-round"
                                        /*onClick={deleteEntry}*/
                                    />
                                </div>
                            }
                        >

                        </DropdownDetailSummary>

                    </div>
                </Veil></section>
        </section>
    )
}

export default DeckEditWindow