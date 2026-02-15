import './CollectionEditor.css'
import CardDatabase from "../../Components/CardDatabase/CardDatabase.jsx";
import Collection from "../../Components/Collection/Collection.jsx";

function CollectionEditor() {


    return (

        <main className="main-container blue-border">
            <CardDatabase/>
            <Collection/>
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