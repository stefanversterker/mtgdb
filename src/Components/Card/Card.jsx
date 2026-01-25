import './Card.css'

function Card({children, management}) {
    return (

        <li className="card-container">
                {children}
                <div className="button-container">
                    {management}
                </div>
        </li>
    )
}

export default Card