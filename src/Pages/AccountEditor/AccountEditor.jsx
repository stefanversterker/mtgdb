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
import { useNavigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";

function AccountEditor() {
    const navigate = useNavigate();
    const [firstNameValue, setFirstNameValue] = useState("")
    const [lastNameValue, setLastNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [bioValue, setBioValue] = useState("")
    const [creatureValue, setCreatureValue] = useState("")
    const {user, userData, setUserData, fetchUserData} = useContext(AuthContext);

    useEffect(() => {
        void fetchUserData();
        /*setFirstNameValue(userData?.first_name || "")*/

    }, [])

    useEffect(() => {
        if (user?.id) {
            fetchUserData(user.id);
        }
    }, [user]);

    useEffect(() => {

            setFirstNameValue(userData.first_name || "")
            setLastNameValue(userData.last_name || "")
            setBioValue(userData.bio || "")
            setCreatureValue(userData.creature_type ||"")

        console.log(userData.first_name)
    }, [userData])

    console.log("firstNameValue:", firstNameValue);

    return (

        <main className="main-container blue-border">
                <UserInfoForm
                    onSubmit={() => navigate("/account")}
                    firstNameValue={firstNameValue} // I changed this back again
                    onChangeFirstName={(e) => setFirstNameValue(e.target.value)}
                    lastNameValue={lastNameValue}
                    onChangeLastName={(e) => setLastNameValue(e.target.value)}
                    bioValue={bioValue}
                    onChangeBio={(e) => setBioValue(e.target.value)}
                    creatureValue={creatureValue}
                    onChangeCreatureType={(e) => setCreatureValue(e.target.value)}
                />
        </main>
    )
}

export default AccountEditor