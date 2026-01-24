import './ButtonPlus.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";

function ButtonPlus({onClick}) {

    return (

        <ButtonSmall
            buttonContent="+"
            className="button-small green-plus"
            onClick={onClick}
        />

    )
}

export default ButtonPlus