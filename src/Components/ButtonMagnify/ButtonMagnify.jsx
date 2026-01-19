import './ButtonMagnify.css'
import React from "react";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import LightBox from "../LightBox/LightBox.jsx";
import MagnifyingGlass from "/src/assets/symbols/magnifying-glass.svg?react";
/*import { Routes, Route } from 'react-router-dom';*/

function ButtonMagnify({counter, children}) {

    const [open, setOpen] = React.useState(false);

    return (

        <>
            <ButtonSmall
                className="button-small lightbox"
                buttonContent={<MagnifyingGlass/>}
                onClick={() => setOpen(true)}
            />

            <LightBox open={open} setOpen={setOpen}/>
        </>
    )
}

export default ButtonMagnify