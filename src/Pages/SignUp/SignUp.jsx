import './SignUp.css'
import DropdownDetailSummary from "../../Components/DropdownDetailSummary/DropdownDetailSummary.jsx";
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import TextArea from "../../Components/TextArea/TextArea.jsx";
import {useState} from "react";
import axios from "axios";

function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users`, {
                email: email,
                password: password,
            }, {
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                }
            })
            navigate('/log-in');
        } catch (e) {
            console.error("kapot");
        } finally {
            toggleLoading(false)
        }
    }

    return (

        <main className="main-container blue-border">
            <section className="info-form-wrapper">
                <Veil>
                    <form className="user-info-form-container" onSubmit={handleSubmit}>
                        <Input
                            labelText="email:"
                            name="email"
                            type="text"
                            placeHolder="email"
                            required="required"
                            id="email"
                            htmlFor="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                console.log(email)
                            }}
                        />
                        <Input
                            labelText="password:"
                            name="password"
                            type="text"
                            placeHolder="password"
                            required="required"
                            id="password"
                            htmlFor="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                console.log(password)
                            }}
                        />
                        <Button
                            type="submit"
                            buttonContent="Submit"
                        />
                    </form>
                </Veil>
            </section>
        </main>
    )
}

export default SignUp