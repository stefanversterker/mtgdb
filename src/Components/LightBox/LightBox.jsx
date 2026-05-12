import './LightBox.css'
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function LightBox({open, setOpen, lightboxSource}) {

    return (

        <>
            <Lightbox className="lightbox-background"
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: lightboxSource },
                ]}
            />
        </>
    )
}

export default LightBox