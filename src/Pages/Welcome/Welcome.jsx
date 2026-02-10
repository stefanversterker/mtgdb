import './Welcome.css'

import {Link, NavLink} from "react-router-dom";
import Button from "/src/Components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

function Welcome() {

    const navigate = useNavigate();

    return (

        <div className="main-container blue-border">
            <main className="welcome-log-sign pink-border">
                <header className="welcome-message">
                    <h1>Welcome to MTG Deckbuilder</h1>
                </header>
                <main className="log-sign-buttons green-border">
                    <Button buttonContent="Sign Up"
                            type="button"
                            onClick={() => navigate("/sign-up")}
                            className="mega-button"/>
                    <p>or</p>
                    <Button buttonContent="Log In"
                            type="button"
                            onClick={() => navigate("/log-in")}
                            className="mega-button"/>
                </main>
            </main>
        </div>
    )
}

export default Welcome