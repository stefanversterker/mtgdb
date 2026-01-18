import './Account.css'
import Veil from "../../Components/Veil/Veil.jsx";
import Dropdown from "../../Components/Dropdown/Dropdown.jsx";
import DropdownContainer from "../../Components/DropdownContainer/DropdownContainer.jsx";
import ButtonSmall from "../../Components/ButtonSmall/ButtonSmall.jsx";
import ButtonPlus from "../../Components/ButtonPlus/ButtonPlus.jsx";
import ButtonEdit from "../../Components/ButtonEdit/ButtonEdit.jsx";
import Input from "../../Components/Input/Input.jsx";
import TextArea from "../../Components/TextArea/TextArea.jsx";
import UserInfoForm from "../../Components/UserInfoForm/UserInfoForm.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function Account({userFirstName, userLastName, userCreatureType, userBio}) {
    return (

        <main className="main-container blue-border">
            <section className="account-container">
                <h1 className="section-title">My Card</h1>
                <Veil className="user-card container" veilTitle="My Card">

                </Veil>
            </section>
            <section className="account-container">
                <h1 className="section-title">User Info</h1>
                <Veil className="user-info container" veilTitle="User Info">
                    <DropdownContainer summaryLeft="Personal details" summaryRight={<ButtonEdit/>}>
                        <UserInfoForm></UserInfoForm>
                    </DropdownContainer>
                </Veil>
            </section>
        </main>
    )
}

export default Account