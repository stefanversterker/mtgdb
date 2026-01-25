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

function AccountEditor() {
    const navigate = useNavigate();

    return (

        <section>
            <UserInfoForm></UserInfoForm>
        </section>
    )
}

export default AccountEditor