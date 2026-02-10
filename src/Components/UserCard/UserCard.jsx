import './UserCard.css'
import user_card from '/src/assets/card.png'
import nacho from '/src/assets/testcards/img_nacho_yawn.jpeg'

function UserCard({creatureType, bio, userName, profilePic}) {
    return (

            <section className="user-card-container green-border">
                    <figure className="user-card">
                        <img src={user_card} alt=""/>
                    </figure>
                    <article className="user-name-container purple-border">
                        <h1 className="user-input">{userName}</h1>
                    </article>
                    <figure className="user-image-container pink-border">
                        <img src={profilePic} alt="nacho"/>
                    </figure>
                    <article className="creature-type-container purple-border">
                        <h1 className="user-input">{creatureType}</h1>
                    </article>
                    <article className="user-bio-container pink-border">
                        <h4 className="user-input user-bio">{bio}</h4>
                    </article>
            </section>
    )
}

export default UserCard