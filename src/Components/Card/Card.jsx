import './Card.css'

function Card({children, management, cardImage, cardImageAlt}) {
    return (

        <li className="card-container">
            {/*{children}*/}
            <figure>
                <img src={cardImage} alt={cardImageAlt}/>
            </figure>
            <div className="button-container">
                {management}
            </div>
        </li>
    )
}

export default Card