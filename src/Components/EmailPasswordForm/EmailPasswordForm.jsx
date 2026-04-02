import './EmailPasswordForm.css'
import Veil from "../Veil/Veil.jsx";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

function EmailPasswordForm({className, children, header, handleSubmit, emailValue, passwordValue, buttonContent, onChangeEmail, onChangePassword}) {

    return (

        <section className="sign-up-in-out pink-border">
            <header>
                <h1>{header}</h1>
            </header>
            <div className="sign-form green-border">
                <Veil>
                    <form className="form" onSubmit={handleSubmit}>
                        <Input
                            labelText="email address:"
                            type="email"
                            value={emailValue}
                            name="email"
                            id="email"
                            htmlFor="email"
                            required="required"
                            onChange={onChangeEmail}
                        >
                        </Input>
                        <Input
                            labelText="password:"
                            type="password"
                            value={passwordValue}
                            name="password"
                            id="password"
                            htmlFor="password"
                            required="required"
                            onChange={onChangePassword}
                        >
                        </Input>
                        <Button buttonContent={buttonContent} type="submit"></Button>
                    </form>
                </Veil>
            </div>
        </section>
    )
}

export default EmailPasswordForm