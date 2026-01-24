import './ButtonMinus.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";

function ButtonMinus({onClick}) {

    return (

        <ButtonSmall
            buttonContent="-"
            className="button-small red-minus"
            onClick={onclick}
        />

    )
}

export default ButtonMinus