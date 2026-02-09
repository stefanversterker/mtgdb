import './LogIn.css'
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContextProvider.jsx";


function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);



    return (

        <main className="main-container blue-border">
            <section className="sign-up-in-out pink-border">
                <header>
                    <h1>Log in</h1>
                </header>
                <div className="sign-form green-border">
                    <Veil>
                        <form className="form" onSubmit="">
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