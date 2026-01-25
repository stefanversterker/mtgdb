import './SignUp.css'
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
/*import { Routes, Route } from 'react-router-dom';*/
import { useNavigate } from "react-router-dom";
import UserInfoForm from "../../Components/UserInfoForm/UserInfoForm.jsx";

function SignUp() {

    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <UserInfoForm onSubmit={() => navigate("/log-in")}/>
        </main>
    )
}

export default SignUp