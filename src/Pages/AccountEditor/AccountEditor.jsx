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
import {useState} from "react";

function AccountEditor() {
    const navigate = useNavigate();
    const [firstNameValue, setFirstNameValue] = useState("")
    const [lastNameValue, setLastNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [bioValue, setBioValue] = useState("")
    const [creatureValue, setCreatureValue] = useState("")

    return (

        <main className="main-container blue-border">
                <UserInfoForm
                    onSubmit={() => navigate("/account")}
                    firstNameValue={firstNameValue}
                    onChangeFirstName={(e) => setFirstNameValue(e.target.value)}
                    lastNameValue={lastNameValue}
                    onChangeLastName={(e) => setLastNameValue(e.target.value)}
                    emailValue={emailValue}
                    onChangeEmail={(e) => setEmailValue(e.target.value)}
                    passwordValue={passwordValue}
                    onChangePassword={(e) => setPasswordValue(e.target.value)}
                    bioValue={bioValue}
                    onChangeBio={(e) => setBioValue(e.target.value)}
                    creatureValue={creatureValue}
                    onChangeCreatureType={(e) => setCreatureValue(e.target.value)}
                />
        </main>
    )
}

export default AccountEditor