import './ButtonEdit.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import EditIcon from "/src/assets/symbols/edit-pencil.svg?react";

function ButtonEdit() {

    return (

        <ButtonSmall
            buttonContent={<EditIcon/>}
            className="button-small deck-summary-button"
        />

    )
}

export default ButtonEdit