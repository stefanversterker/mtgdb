import './Account.css'
import Veil from "../../Components/Veil/Veil.jsx";
import UserCard from "../../Components/UserCard/UserCard.jsx";
import Button from "../../Components/Button/Button.jsx";
import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {useNavigate} from "react-router-dom";
import nacho from "/src/assets/testcards/img_nacho_yawn.jpeg"

function Account() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const {user} = useContext(AuthContext);

    useEffect(() => {
        async function fetchUserData() {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/',
                    {
                        headers: {
                            'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        }
                    })
                setUserData(response.data)
                console.log(response)
            }
            catch(e) {
                console.error("kapot!")
            }
        }

        void fetchUserData();
    }, [])

    return (

        <main className="main-container blue-border">
            <section className="account-container">
                <header className="user-card-header">
                    <h1 className="section-title">My Card</h1>
                    <Button buttonContent="Edit"
                            type="button"
                            onClick={() => navigate("/account/edit-account")}/>
                </header>
                <Veil className="user-card container" veilTitle="My Card">
                    <UserCard
                        creatureType={userData[0]?.creature_type}
                        userName={userData[0]?.user_name}
                        bio={userData[0]?.bio}
                        profilePic={nacho}
                    >
                    </UserCard>
                </Veil>
            </section>
        </main>
    )
}

export default Account