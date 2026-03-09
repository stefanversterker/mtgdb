import './CardListItem.css';
import CardManagement from "../CardManagement/CardManagement.jsx";
import ButtonMagnify from "../ButtonMagnify/ButtonMagnify.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import TrashIcon from "../../assets/symbols/trash.svg";

function CardListItem({cardName}) {
    return (

        <li className="card-list-item">
            <p>{cardName}</p>
            <CardManagement
                lightBoxSource={{/*card.image_uris?.png ??
                card.card_faces?.[0]?.image_uris?.png*/
                }
                }
            >
                <div>
                    <ButtonSmall
                    buttonContent="-"
                    className="button-minus"
                    /*onClick={}*/
                />
                    <ButtonSmall
                        buttonContent="+"
                        className="button-plus"
                        /*onClick={}*/
                    />
                </div>
                <CounterBox/>
            </CardManagement>
        </li>
    )
}

export default CardListItem