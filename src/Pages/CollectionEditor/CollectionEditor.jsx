import './CollectionEditor.css'
import CardDatabase from "../../Components/CardDatabase/CardDatabase.jsx";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";
import Collection from "../../Components/Collection/Collection.jsx";
import {useNavigate} from "react-router-dom";
import CounterBox from "../../Components/CounterBox/CounterBox.jsx";
import ButtonSmall from "../../Components/ButtonSmall/ButtonSmall.jsx";
import TrashIcon from "/src/assets/symbols/trash.svg?react";
import {useEffect, useState} from "react";
import axios from "axios";

function CollectionEditor() {
    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <CardDatabase/>
            <Collection
                headerButtonContent="Save collection"
                headerButtonClick={() => navigate("/")}
            >
                {({amount, increaseAmount, decreaseAmount}) =>(
                <div className="card-counter-box">
                    <div>
                        {
                            amount > 1 ? (
                            <ButtonSmall
                                buttonContent="-"
                                className="button-minus"
                                onClick={decreaseAmount}
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
                        onClick={increaseAmount}
                    />
                </div>
                )}

            </Collection>
        </main>
    )
}

export default CollectionEditor