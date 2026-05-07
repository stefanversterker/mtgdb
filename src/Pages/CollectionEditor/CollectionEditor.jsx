import './CollectionEditor.css'
import CardDatabase from "../../Components/CardDatabase/CardDatabase.jsx";
import Collection from "../../Components/Collection/Collection.jsx";
import {useNavigate} from "react-router-dom";
import ButtonSmall from "../../Components/ButtonSmall/ButtonSmall.jsx";
import {useContext, useEffect, useState} from "react";
import {CollectionContext} from "../../context/CollectionContextProvider.jsx";
import {AuthContext} from "../../context/AuthContextProvider.jsx";


function CollectionEditor() {
    const navigate = useNavigate();
    const { addCard, collectionId, userCollection, setUserCollection, updateAmount} = useContext(CollectionContext);
    const { user } = useContext(AuthContext);

    return (

        <main className="main-container blue-border">

            <CardDatabase onClickAdd={addCard}/>
            <Collection
                headerButtonContent="Save collection"
                headerButtonClick={() => navigate("/")}
                userCollection={userCollection}
                setUserCollection={setUserCollection}
                updateAmount={updateAmount}

            >
                {({amount, increaseAmount, decreaseAmount, deleteEntry}) =>(
                <div className="card-counter-box"
                     role="stepper"
                >
                    <div>
                        {
                            amount > 1 ? (
                            <ButtonSmall
                                buttonContent="-"
                                className="red-minus button-edge-right"
                                onClick={decreaseAmount}
                            />
                        ) : (
                            <ButtonSmall
                                buttonContent="x"
                                className="red-minus button-edge-right"
                                onClick={deleteEntry}
                            />
                        )}
                    </div>
                    <ButtonSmall
                        buttonContent="+"
                        className="green-plus button-edge-left"
                        onClick={increaseAmount}
                    />
                </div>
                )}
            </Collection>
        </main>
    )
}

export default CollectionEditor