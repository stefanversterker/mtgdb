import './LightBox.css'
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import icy_manipulator from "../../assets/testcards/icy_manipulator__s6__cn249_lnen.jpg";

function LightBox({open, setOpen}) {

    return (

        <>
            <Lightbox className="lightbox-background"
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: icy_manipulator },
                ]}
            />
        </>
    )
}

export default LightBox