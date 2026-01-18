import './UserCard.css'
import user_card from '/src/assets/card.png'

/*import { Routes, Route } from 'react-router-dom';*/

function UserCard() {
    return (

        <section className="user-card-container green-border">
            <figure className="user-card">
                <img src={user_card} alt=""/>
            </figure>
            <article className="user-name-container purple-border">
                <h1 className="user-input">User Name</h1>
            </article>
            <figure className="user-image-container pink-border">

            </figure>
            <article className="creature-type-container purple-border">
                <h1 className="user-input">Creature type</h1>
            </article>
            <article className="user-bio-container pink-border">
                <h4 className="user-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
            </article>

        </section>
    )
}

export default UserCard