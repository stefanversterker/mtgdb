import './CardSearch.css'
import Veil from "../Veil/Veil.jsx";
import Input from "../Input/Input.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import ManaBlack from "/src/assets/symbols/mana-black.svg?react";
import ManaBlue from "/src/assets/symbols/mana-blue.svg?react";
import ManaColorless from "/src/assets/symbols/mana-colorless.svg?react";
import ManaGreen from "/src/assets/symbols/mana-green.svg?react";
import ManaRed from "/src/assets/symbols/mana-red.svg?react";
import ManaWhite from "/src/assets/symbols/mana-white.svg?react";
import Button from "../Button/Button.jsx";
import ManaRangeSlider from "../ManaRangeSlider/ManaRangeSlider.jsx";

function CardSearch({children, displayTitle, button, cardType, setCardType, cardColor, setCardColor, sortType, setSortType}) {
    return (

        <section className="card-search-container orange-border">
            <header className="card-search-header">
                <h1>{displayTitle}</h1>
                {button}
            </header>
            <section className="search-menu brown-border">
                <Veil>
                    <div className="key-search">
                        <Input
                            placeHolder="Card name"
                            type="text"
                            value="searchTerm"
                            name="searchTerm"
                            id="searchTerm"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="card-spec-dropdowns">
                        <Dropdown
                            selectedValue={cardType}
                            setSelectedValue={setCardType}
                        >
                            <option value="">--choose a card type--</option>
                            <option value="artifact">artifact</option>
                            <option value="creature">creature</option>
                            <option value="enchantment">enchantment</option>
                            <option value="instant">instant</option>
                            <option value="land">land</option>
                            <option value="plainswalker">plainswalker</option>
                            <option value="sorcery">sorcery</option>
                        </Dropdown>
                        <Dropdown
                            selectedValue={cardColor}
                            setSelectedValue={setCardColor}
                        >
                            <option value="">--choose a color--</option>
                            <option value="white">white</option>
                            <option value="blue">blue</option>
                            <option value="black">black</option>
                            <option value="red">red</option>
                            <option value="green">green</option>
                            <option value="colorless">colorless</option>
                        </Dropdown>
                    </div>
                    <div className="sort-cmc-search-container">
                        <Dropdown
                            selectedValue={sortType}
                            setSelectedValue={setSortType}
                        >
                            <option value="a-b">sort: A-B</option>
                            <option value="b-a">sort: B-A</option>
                            <option value="cmc-lo-hi">sort: cmc, 0-10</option>
                            <option value="cmc-hi-lo">sort: cmc, 10-0</option>
                        </Dropdown>
                        <div className="cmc-slider">
                            <ManaRangeSlider></ManaRangeSlider>
                        </div>
                    </div>
                </Veil>
            </section>
            <section className="card-flow-container pink-border">
                <Veil>
                    <ul className="card-flow green-border">
                        {children}
                    </ul>
                </Veil>
            </section>


        </section>
    )
}

export default CardSearch