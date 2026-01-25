import './Account.css'
import Veil from "../../Components/Veil/Veil.jsx";
import Dropdown from "../../Components/Dropdown/Dropdown.jsx";
import DropdownContainer from "../../Components/DropdownContainer/DropdownContainer.jsx";
import ButtonSmall from "../../Components/ButtonSmall/ButtonSmall.jsx";
import ButtonEdit from "../../Components/ButtonEdit/ButtonEdit.jsx";
import Input from "../../Components/Input/Input.jsx";
import TextArea from "../../Components/TextArea/TextArea.jsx";
import UserInfoForm from "../../Components/UserInfoForm/UserInfoForm.jsx";
import UserCard from "../../Components/UserCard/UserCard.jsx";
import Button from "../../Components/Button/Button.jsx";

function Account({userFirstName, userLastName, userCreatureType, userBio}) {
    return (

        <main className="main-container blue-border">
            <section className="account-container">
                <header className="user-card-header">
                    <h1 className="section-title">My Card</h1>
                    <Button buttonContent="Edit"
                            type="button"/>
                </header>
                <Veil className="user-card container" veilTitle="My Card">
                    <UserCard>

                    </UserCard>
                </Veil>
            </section>
        </main>
    )
}

export default Account