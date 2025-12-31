import './DecksOverview.css'
import DeckSearch from "../../Components/DeckSearch/DeckSearch.jsx";
/*import { Routes, Route } from 'react-router-dom';*/

function DecksOverview() {
    return (

        <main className="main-container blue-border">
            <section className="pink-border all-decks-container">
                <DeckSearch></DeckSearch>
            </section>
        </main>
    )
}

export default DecksOverview