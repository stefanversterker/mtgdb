import './CardListItem.css';
import CardManagement from "../CardManagement/CardManagement.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";

function CardListItem({cardName, cardAmount, lightBoxSource, onClickMinus, onClickPlus, onClickTrash}) {
    return (

        <article className="card-list-item">
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
                                    buttonContent="x"
                                    className="red-minus button-edge-right"
                                    onClick={onClickTrash}
                                />
                            )}
                    </div>
                    <ButtonSmall
                        buttonContent="+"
                        className="green-plus button-edge-left"
                        onClick={onClickPlus}
                    />
                </div>
                <CounterBox cardAmount={cardAmount}/>
            </CardManagement>
        </article>
    )
}

export default CardListItem