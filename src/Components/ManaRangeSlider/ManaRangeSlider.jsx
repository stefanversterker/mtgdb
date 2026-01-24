import * as Slider from "@radix-ui/react-slider";
import {useState} from "react";
import './ManaRangeSlider.css'
import CounterBox from "../CounterBox/CounterBox.jsx";

function ManaRangeSlider() {
    const [range, setRange] = useState([0, 15]);

    return (
        <div className="cmc-range-container">
            <p className="slider-label">CMC: </p>
            <CounterBox cardAmount={range[0]}></CounterBox>
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

                <Slider.Thumb className="slider-thumb thumb-min"/>
                <Slider.Thumb className="slider-thumb thumb-max"/>
            </Slider.Root>
            <CounterBox cardAmount={range[1]}></CounterBox>
        </div>
    );
}

export default ManaRangeSlider;