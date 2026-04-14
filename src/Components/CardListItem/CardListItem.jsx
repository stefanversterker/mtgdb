import './CardListItem.css';
import CardManagement from "../CardManagement/CardManagement.jsx";
import ButtonMagnify from "../ButtonMagnify/ButtonMagnify.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
/*import TrashIcon from "../../assets/symbols/trash.svg";*/
import TrashIcon from "/src/assets/symbols/trash.svg?react";

function CardListItem({cardName, cardAmount, lightBoxSource, onClickMinus, onClickPlus, onClickTrash}) {
    return (

        <li className="card-list-item">
            <p>{cardName}</p>
            <CardManagement
                lightBoxSource={lightBoxSource}
            >
                <div className="plus-minus-buttons">
                    <div>
                        {
                            cardAmount > 1 ? (
                                <ButtonSmall
                                    buttonContent="-"
                                    className="red-minus button-edge-right"
                                    onClick={onClickMinus}
                                />
                            ) : (
                                <ButtonSmall
                                    buttonContent=/*{<TrashIcon className="trash-icon"/>}*/"x"
                                    className="red-minus button-edge-right"
                                    onClick={onClickTrash}
                                />
                            )}
                    </div>
                    <ButtonSmall
                        buttonContent="+"
                        className="green-plus button-edge-left"
                        onClick={onClickPlus}
                    /></div>
                <CounterBox cardAmount={cardAmount}/>
            </CardManagement>
        </li>
    )
}

export default CardListItem