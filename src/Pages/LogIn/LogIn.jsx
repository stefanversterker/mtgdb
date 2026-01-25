import './LogIn.css'
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";


function LogIn() {

    const navigate = useNavigate();

    return (

        <main className="main-container blue-border">
            <section className="sign-up-in-out pink-border">
                <header>
                    <h1>Log in</h1>
                </header>
                <div className="sign-form green-border">
                    <Veil>
                        <form className="form" onSubmit="">
                            <Input labelText="email address:"></Input>
                            <Input labelText="enter password:"></Input>
                            <Input labelText="confirm password:"></Input>
                            <Button buttonContent="Log In" onClick={() => navigate("/")}></Button>
                        </form>
                    </Veil>
                </div>
            </section>
        </main>
    )
}

export default LogIn