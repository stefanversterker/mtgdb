import './AccountEditor.css'
import Veil from "../../Components/Veil/Veil.jsx";
import Dropdown from "../../Components/Dropdown/Dropdown.jsx";
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import ButtonSmall from "../../Components/ButtonSmall/ButtonSmall.jsx";
import ButtonEdit from "../../Components/ButtonEdit/ButtonEdit.jsx";
import Input from "../../Components/Input/Input.jsx";
import TextArea from "../../Components/TextArea/TextArea.jsx";
import UserInfoForm from "../../Components/UserInfoForm/UserInfoForm.jsx";
import UserCard from "../../Components/UserCard/UserCard.jsx";
import Button from "../../Components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import axios from "axios";

function AccountEditor() {
    const navigate = useNavigate();
    const [firstNameValue, setFirstNameValue] = useState("")
    const [lastNameValue, setLastNameValue] = useState("")
    const [userNameValue, setUserNameValue] = useState("")
    const [bioValue, setBioValue] = useState("")
    const [creatureValue, setCreatureValue] = useState("")

    const [formData, setFormData] = useState({
        id: null,
        firstName: "",
        lastName: "",
        userName: "",
        creatureType: "",
        bio: "",
    })
    const {user, userData, setUserData, fetchUserData} = useContext(AuthContext);
    const isUnchanged =
        formData.firstName === userData.firstName &&
        formData.lastName === userData.lastName &&
        formData.userName === userData.userName &&
        formData.creatureType === userData.creatureType &&
        formData.bio === userData.bio;

    async function patchUserData() {

        try {

            await axios.patch(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/${user.id}`,
                    formData,
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                })
        } catch (error) {
            console.log("Sorry, deck name could not be changed")
        }
    }

    useEffect(() => {
        void fetchUserData();
    }, [])

    useEffect(() => {
        if (user?.id) {
            fetchUserData(user.id);
        }
    }, [user]);

    useEffect(() => {
        setFormData({
            id: userData.id || null,
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            userName: userData.userName || "",
            creatureType: userData.creatureType || "",
            bio: userData.bio || "",
        });
    }, [userData]);

    /*console.log("firstNameValue:", firstNameValue);*/

    return (

        <main className="main-container blue-border">
            <UserInfoForm
                disabled={isUnchanged}
                className={isUnchanged ? "disabled-button" : "button"}
                onClick={() => navigate("/account")}
                onSubmit={async(e) => {
                    e.preventDefault();
                    await patchUserData();
                    navigate("/account")
                }}
                firstNameValue={formData.firstName}
                onChangeFirstName={(e) =>
                    setFormData({
                        ...formData,
                        firstName: e.target.value
                    })
                }
                lastNameValue={formData.lastName}
                onChangeLastName={(e) =>
                    setFormData({
                        ...formData,
                        lastName: e.target.value
                    })
                }
                userNameValue={formData.userName}
                onChangeUserName={(e) =>
                    setFormData({
                        ...formData,
                        userName: e.target.value
                    })
                }
                bioValue={formData.bio}
                onChangeBio={(e) =>
                    setFormData({
                        ...formData,
                        bio: e.target.value
                    })
                }
                creatureValue={formData.creatureType}
                onChangeCreatureType={(e) =>
                    setFormData({
                        ...formData,
                        creatureType: e.target.value
                    })
                }
            />
        </main>
    )
}

export default AccountEditor