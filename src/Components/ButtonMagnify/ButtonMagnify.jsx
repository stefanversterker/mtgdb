import './ButtonMagnify.css'
import React from "react";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import LightBox from "../LightBox/LightBox.jsx";
import MagnifyingGlass from "/src/assets/symbols/magnifying-glass.svg?react";

function ButtonMagnify() {

    const [open, setOpen] = React.useState(false);

    return (

        <>
            <ButtonSmall
                className="button-lightbox"
                buttonContent={<MagnifyingGlass/>}
                onClick={() => setOpen(true)}
            />

            <LightBox open={open} setOpen={setOpen}/>
        </>
    )
}

export default ButtonMagnify