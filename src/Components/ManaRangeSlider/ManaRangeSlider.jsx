import * as Slider from "@radix-ui/react-slider";
import './ManaRangeSlider.css'
import CounterBox from "../CounterBox/CounterBox.jsx";

function ManaRangeSlider({cmcRange, setCmcRange}) {

    return (
        <div className="cmc-range-container">
            <p className="slider-label">CMC: </p>
            <CounterBox cardAmount={cmcRange[0]}></CounterBox>
            <Slider.Root
                value={cmcRange}
                onValueChange={setCmcRange}
                min={0}
                max={16}
                step={1}
                className="slider-root"
            >
                <Slider.Track className="slider-track">
                    <Slider.Range className="slider-range"/>
                </Slider.Track>

                <Slider.Thumb className="slider-thumb thumb-min"/>
                <Slider.Thumb className="slider-thumb thumb-max"/>
            </Slider.Root>
            <CounterBox cardAmount={cmcRange[1]}></CounterBox>
        </div>
    );
}

export default ManaRangeSlider;