import './CardSearch.css'
import Veil from "../Veil/Veil.jsx";
import Input from "../Input/Input.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import manaWhite from "/src/assets/symbols/mana-white.svg?react";

/*import { Routes, Route } from 'react-router-dom';*/

function CardSearch({children}) {
    return (

        <section className="card-search-container">
            <title>
                <h1>Database</h1>
            </title>
            <Veil>
                <div className="key-cmc">
                    <Input
                    placeHolder="Card name"
                    />
                    <Input
                    placeHolder="CMC"
                    />
                </div>
                <div className="card-spec-dropdowns">
                    <Dropdown
                    option1Value=""
                    option1Name="Card type"
                    option2Value="Artifact"
                    option2Name="Artifact"
                    option3Value="Creature"
                    option3Name="Creature"
                    option4Value="Enchantment"
                    option4Name="Enchantment"
                    option5Value="Instant"
                    option5Name="Instant"
                    option6Value="Land"
                    option6Name="Land"
                    option7Value="Plainswalker"
                    option7Name="Plainswalker"
                    option8Value="Sorcery"
                    option8Name="Sorcery"
                    />
                    <Dropdown
                        option1Value="" option1Name="Color"
                        option2Value="White" option2Name="White"
                        option3Value="Blue" option3Name="Blue"
                        option4Value="Black" option4Name="Black"
                        option5Value="Red" option5Name="Red"
                        option6Value="Green" option6Name="Green"
                        option7Value="Colorless" option7Name="Colorless"
                    />
                    <Dropdown
                        option1Value=""
                        option1Name="Sort"
                        option2Value="Alphabetical: A-Z"
                        option2Name="Alphabetical: A-Z"
                        option3Value="Alphabetical: Z-A"
                        option3Name="Alphabetical: Z-A"
                        option4Value="CMC: low-high"
                        option4Name="CMC: low-high"
                        option5Value="CMC: high-low"
                        option5Name="CMC: high-low"
                    />
                </div>
                <div className="card-flow green-border">

                </div>


            </Veil>
        </section>
    )
}

export default CardSearch