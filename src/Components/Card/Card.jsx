import './Card.css'

function Card({management, cardImage, cardImageAlt}) {
    return (

        <li className="card-container">
            <figure>
                <img src={cardImage} alt={`Image of a magic card: ${cardImageAlt}`}/>
            </figure>
            <div className="button-container">
                {management}
            </div>
        </li>
    )
}

export default Card