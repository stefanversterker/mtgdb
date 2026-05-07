import './CardSearch.css'
import Veil from "../Veil/Veil.jsx";
import Input from "../Input/Input.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import Button from "../Button/Button.jsx";
import ManaRangeSlider from "../ManaRangeSlider/ManaRangeSlider.jsx";

function CardSearch({
                        children,
                        displayTitle,
                        button,
                        cardType,
                        setCardType,
                        cardColor,
                        setCardColor,
                        sortType,
                        setSortType,
                        sortDir,
                        setSortDir,
                        searchTerm,
                        setSearchTerm,
                        cmcRange,
                        setCmcRange,
                        prevClick,
                        nextClick,
                        prevDisabled,
                        nextDisabled,
                        prevButtonClass,
                        nextButtonClass,
                    }) {


    function handleSortChange(value) {
        const [type, dir] = value.split("-");
        setSortType(type);
        setSortDir(dir);
    }

    return (

        <section className="card-search-container orange-border">
            <header className="card-search-header">

                <h1>{displayTitle}</h1>
                {button}
            </header>
            <section className="search-menu brown-border">
                {/*Onzichtbare header omdat een section altijd een header moet hebben*/}
                <h3 className="hidden">--search menu--</h3>
                <Veil>
                    <article className="key-search">
                        <Input
                            placeHolder="Card name"
                            type="text"
                            value={searchTerm}
                            name="searchTerm"
                            id="searchTerm"
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }
                            }
                        />
                    </article>
                    <article className="card-spec-dropdowns">
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
                            <option value="planeswalker">planeswalker</option>
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
                    </article>
                    <fieldset className="sort-cmc-search-container">
                        <Dropdown
                            selectedValue={`${sortType}-${sortDir}`}
                            setSelectedValue={handleSortChange}
                        >
                            <option value="name-asc">sort: A-Z</option>
                            <option value="name-desc">sort: Z-A</option>
                            <option value="cmc-asc">sort: cmc, 0-10</option>
                            <option value="cmc-desc">sort: cmc, 10-0</option>
                        </Dropdown>
                        <div className="cmc-slider">
                            <ManaRangeSlider
                                cmcRange={cmcRange}
                                setCmcRange={setCmcRange}
                            />
                        </div>
                    </fieldset>
                </Veil>
            </section>
            <section className="card-flow-container pink-border">
                {/*Onzichtbare header omdat een section altijd een header moet hebben*/}
                <h3 className="hidden">--card flow--</h3>
                <Veil>
                    <div className="card-flow green-border">
                        {children}
                    </div>
                </Veil>
            </section>
            <nav className="paginating-button-container">
                <Button buttonContent="Previous"
                        className={prevButtonClass}
                        type="button"
                        onClick={prevClick}
                        disabled={prevDisabled}
                />
                <Button buttonContent="Next"
                        className={nextButtonClass}
                        type="button"
                        onClick={nextClick}
                        disabled={nextDisabled}
                />
            </nav>



        </section>
    )
}

export default CardSearch