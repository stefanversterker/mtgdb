import './CollectionEditor.css'
import CardDatabase from "../../Components/CardDatabase/CardDatabase.jsx";
import Collection from "../../Components/Collection/Collection.jsx";
import {useNavigate} from "react-router-dom";
import CardCounter from "../../Components/CardCounter/CardCounter.jsx";

function CollectionEditor() {
    const navigate = useNavigate();


    return (

        <main className="main-container blue-border">
            <CardDatabase/>
            <Collection
                headerButtonClick={() => navigate("/")}
                headerButtonContent="Save Collection"
                renderExtra={(card, amount) => (
                    <CardCounter cardAmount={amount} cardId={card.id} />
                )}
            />
            {/*<CardSearch displayTitle="Collection editor"
                    button={<Button buttonContent="Save" onClick={() => navigate("/")}/>}>
            <Card management={<CardManagement lightBoxSource={lake_of_the_dead}><CardCounter/></CardManagement>}
                  cardImage={lake_of_the_dead}
                  cardImageAlt="bla"
            />

        </CardSearch>*/}
        </main>
    )
}

export default CollectionEditor