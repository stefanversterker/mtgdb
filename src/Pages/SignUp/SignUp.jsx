import './SignUp.css'
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
/*import { Routes, Route } from 'react-router-dom';*/
import { useNavigate } from "react-router-dom";
import UserInfoForm from "../../Components/UserInfoForm/UserInfoForm.jsx";
import EmailPasswordForm from "../../Components/EmailPasswordForm/EmailPasswordForm.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import Message from "../../Components/Message/Message.jsx";

function SignUp() {
    /*const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")*/
    const { newUser, email, setEmail, password, setPassword } = useContext(AuthContext);

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
                handleSubmit={async(e) => {
                    e.preventDefault();
                    await newUser(email, password);
                    navigate("/log-in")
                }}
            />
        </main>
    )
}

export default SignUp