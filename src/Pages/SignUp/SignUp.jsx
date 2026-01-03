import './SignUp.css'
import CardTypeDropdown from "../../Components/CardTypeDropdown/CardTypeDropdown.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
/*import { Routes, Route } from 'react-router-dom';*/
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <section className="sign-up-in-out pink-border">
                <header>
                    <h1>Sign up</h1>
                </header>
                <div className="sign-form green-border">
                    <Veil>
                        <form className="form" onSubmit="">
                            <Input labelText="email address:"></Input>
                            <Input labelText="choose a password:"></Input>
                            <Input labelText="confirm password:"></Input>
                            <Button buttonContent="Sign Up" onClick={() => navigate("/log-in")}></Button>

                        </form>
                    </Veil>
                </div>
            </section>
        </main>
    )
}

export default SignUp