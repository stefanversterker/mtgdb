import * as Slider from "@radix-ui/react-slider";
import {useState} from "react";
import './ManaRangeSlider.css'
import CardCounter from "../CardCounter/CardCounter.jsx";

function ManaRangeSlider() {
    const [range, setRange] = useState([0, 15]);

    return (
        <div className="cmc-range-container">
            <p className="slider-label">CMC: </p>
            <CardCounter cardAmount={range[0]}></CardCounter>
            <Slider.Root
                value={range}
                onValueChange={setRange}
                min={0}
                max={15}
                step={1}
                className="slider-root"
            >
                <Slider.Track className="slider-track">
                    <Slider.Range className="slider-range"/>
                </Slider.Track>

                <Slider.Thumb className="slider-thumb"/>
                <Slider.Thumb className="slider-thumb"/>
            </Slider.Root>
            <CardCounter cardAmount={range[1]}></CardCounter>
        </div>
    );
}

export default ManaRangeSlider;