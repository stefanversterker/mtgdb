import './LogIn.css'
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import axios from "axios";
import {useNoviId} from "../../context/NoviIdProvider.jsx";
import Message from "../../Components/Message/Message.jsx";


function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);
    const { noviId } = useNoviId()

async function handleSubmit(e){
    e.preventDefault();
    toggleError(false);

    try {
        const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login', {
            email: email,
            password: password,
        }, {
            headers: {
                'novi-education-project-id': noviId,
            }
        });
        console.log(response)
        login(response.data);
    } catch(e) {
        console.error("Login failed");
        toggleError(true);
    }
}

    return (

        <main className="main-container blue-border">
            <section className="sign-up-in-out pink-border">
                {error && <Message className="bad-news">Incorrect email and/or password</Message>}
                <header>
                    <h1 className="header">Log in</h1>
                </header>
                <div className="sign-form green-border">
                    <Veil >
                        <form className="form" onSubmit={handleSubmit}>
                            <Input
                                labelText="email address:"
                                type="email"
                                value={email}
                                name="email"
                                id="email"
                                htmlFor="email"
                                required="required"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    console.log(email)
                                }}
                            >
                            </Input>
                            <Input
                                labelText="password:"
                                type="password"
                                value={password}
                                name="password"
                                id="password"
                                htmlFor="password"
                                required="required"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    console.log(password)
                                }}
                            >
                            </Input>
                            <Button buttonContent="Log In" type="submit"></Button>
                        </form>
                    </Veil>
                </div>
            </section>
        </main>
    )
}

export default LogIn