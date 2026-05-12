import './UserCard.css'
import user_card from '/src/assets/card.png'

function UserCard({creatureType, bio, userName, profilePic}) {
    return (

            <section className="user-card-container green-border">
                    <figure className="user-card">
                        <img src={user_card} alt=""/>
                    </figure>
                    <div className="user-name-container purple-border">
                        <h1 className="user-input">{userName}</h1>
                    </div>
                    <div className="user-image-container pink-border">
                        <img src={profilePic} alt={`profile picture of ${userName}`} />
                    </div>
                    <div className="creature-type-container purple-border">
                        <h1 className="user-input">{creatureType}</h1>
                    </div>
                    <div className="user-bio-container pink-border">
                        <h4 className="user-input user-bio">{bio}</h4>
                    </div>
            </section>
    )
}

export default UserCard