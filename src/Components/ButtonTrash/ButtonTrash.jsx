import './ButtonTrash.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import TrashIcon from "/src/assets/symbols/trash.svg?react";

function ButtonTrash() {

    return (

        <ButtonSmall
            buttonContent={<TrashIcon/>}
            className="button-small deck-summary-button"
        />

    )
}

export default ButtonTrash