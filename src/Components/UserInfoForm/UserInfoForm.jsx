import './UserInfoForm.css'
import Input from "../Input/Input.jsx";
import TextArea from "../TextArea/TextArea.jsx";
import Button from "../Button/Button.jsx";
import Veil from "../Veil/Veil.jsx";

function UserInfoForm({onSubmit}) {

    return (

        <section className="info-form-wrapper">
            <Veil>
            <form className="user-info-form-container" onSubmit={onSubmit}>
                <Input labelText="first name:" name="first-name" type="text"/>
                <Input labelText="last name:" name="last-name" type="text"/>
                <Input labelText="creature type:" name="creature-type" type="text"/>
                <TextArea labelText="user bio:"/>
                <Input labelText="profile picture:" name="profile-picture"/>
                <Input labelText="email address:" name="email" type="email"/>
                <Input labelText="password:" name="password" type="password"/>
                <Button type="submit" buttonContent="Submit"/>
            </form>
        </Veil>
        </section>

    )
}

export default UserInfoForm