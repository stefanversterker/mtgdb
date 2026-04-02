import './SignUp.css'
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
/*import { Routes, Route } from 'react-router-dom';*/
import { useNavigate } from "react-router-dom";
import UserInfoForm from "../../Components/UserInfoForm/UserInfoForm.jsx";
import EmailPasswordForm from "../../Components/EmailPasswordForm/EmailPasswordForm.jsx";
import {useState} from "react";

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <EmailPasswordForm
                header="Sign up"
                emailValue={email}
                onChangeEmail={(e) => {
                    setEmail(e.target.value)
                    /*console.log(email)*/
                }}
                passwordValue={password}
                onChangePassword={(e) => {
                    setPassword(e.target.value)
                    /*console.log(password)*/
                }}
                buttonContent="Sign up"
                /*handleSubmit={}*/
            />
        </main>
    )
}

export default SignUp