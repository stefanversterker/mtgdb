import * as Slider from "@radix-ui/react-slider";
import './ManaRangeSlider.css'
import CounterBox from "../CounterBox/CounterBox.jsx";
import {useState} from 'react'
import {useEffect} from 'react'

function ManaRangeSlider({cmcRange, setCmcRange}) {

    const [sliderPreview, setSliderPreview] = useState([cmcRange[0],cmcRange[1]])

    useEffect(() => {
        setSliderPreview(cmcRange)
    }, [cmcRange]);


    return (
        <div className="cmc-range-container">
            <p className="slider-label">CMC: </p>
            <CounterBox cardAmount={sliderPreview[0]}></CounterBox>
            <Slider.Root
                value={sliderPreview}
                onValueChange={setSliderPreview}
                onValueCommit={setCmcRange}
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
            <CounterBox cardAmount={sliderPreview[1]}></CounterBox>
        </div>
    );
}

export default ManaRangeSlider;