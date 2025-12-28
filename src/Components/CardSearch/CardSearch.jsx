import './CardSearch.css'
import Veil from "../Veil/Veil.jsx";
import Input from "../Input/Input.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import manaWhite from "/src/assets/symbols/mana-white.svg?react";
import Card from "../Card/Card.jsx";
import CardInDataBase from "../CardInDataBase/CardInDataBase.jsx";
import CardInCollection from "../CardInCollection/CardInCollection.jsx";
import icy_manipulator from "/src/assets/testcards/icy_manipulator__s6__cn249_lnen.jpg"
import lake_of_the_dead from "/src/assets/testcards/lake_of_the_dead__s46__cn140_lnen.jpg"

/*import { Routes, Route } from 'react-router-dom';*/

function CardSearch() {
    return (

        <section className="card-search-container orange-border">
            <title>
                <h1>Database</h1>
            </title>
            <section className="search-menu brown-border">
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
                </Veil>
            </section>
            <section className="card-flow-container pink-border">
                <Veil>
                    <div className="card-flow green-border">
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>
                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>

                        <CardInDataBase>
                            <img src={icy_manipulator} alt="ijzige manipulator"/>
                        </CardInDataBase>






                    </div>
                </Veil>
            </section>


        </section>
    )
}

export default CardSearch