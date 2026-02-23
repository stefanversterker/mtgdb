import './CardCounter.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx"
import TrashIcon from "/src/assets/symbols/trash.svg?react";
import {useState} from 'react';

function CardCounter({onClickMinus, onClickPlus, cardAmount}) {

    return (

        <div className="card-counter-box">
            <div>
                {cardAmount > 1 ? (
                    <ButtonSmall
                        buttonContent="-"
                        className="button-minus"
                        onClick={onClickMinus}
                    />

                ) : (
                    <ButtonSmall
                        buttonContent={<TrashIcon className="trash-icon"/>}
                        className="button-minus"
                    />
                )}
            </div>
            <ButtonSmall
                buttonContent="+"
                className="button-plus"
                onClick={onClickPlus}
            />
        </div>
    )
}

export default CardCounter