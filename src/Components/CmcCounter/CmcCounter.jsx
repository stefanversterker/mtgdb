import './CmcCounter.css';
import Button from "../button/Button.jsx";
import React from "react";
import Input from "../Input/Input.jsx";


function CmcCounter({fruitType, counter, setCounter, counterTitle, counterValue}) {


    return (
        <>
            <section>
                <article className="counter-container">
                    <p>{counterTitle}</p>
                    <Button className="increase-decrease-button"
                            type="button"
                            value={counter}
                            handleClick={() => setCounter(counter - 1)}
                            disabled={counter === 0}
                            buttonLabel='-' buttonContent="-"
                    />

                    <div className="counter-display">
                        <p>{counterValue}</p>
                    </div>

                    <Button
                        className="increase-decrease-button"
                        type="button"
                        value="counter"
                        handleClick={() => setCounter(counter + 1)}
                        buttonLabel='+' buttonContent="+"
                    />
                </article>
            </section>
        </>
    )
}

export default CmcCounter
