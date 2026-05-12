import './Account.css'
import Veil from "../../Components/Veil/Veil.jsx";
import UserCard from "../../Components/UserCard/UserCard.jsx";
import Button from "../../Components/Button/Button.jsx";
import {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import {useNavigate} from "react-router-dom";
import nacho from "/src/assets/testcards/img_nacho_yawn.jpeg"

function Account() {
    const navigate = useNavigate();
    const {user, userData, setUserData, fetchUserData} = useContext(AuthContext);

    useEffect(() => {

        void fetchUserData();
    }, [])

    return (

        <main className="main-container blue-border">
            <section className="account-container orange-border">
                <header className="user-card-header brown-border">
                    <h1 className="section-title">My Card</h1>
                    <Button buttonContent="Edit"
                            type="button"
                            onClick={() => navigate("/account/edit-account")}
                            className="edit-button"
                    />
                </header>
                <Veil className="user-card-container brown-border" veilTitle="My Card">
                    <UserCard
                        creatureType={userData?.creatureType}
                        userName={userData?.userName}
                        bio={userData?.bio}
                        profilePic={nacho}
                    >
                    </UserCard>
                </Veil>
            </section>
        </main>
    )
}

export default Account