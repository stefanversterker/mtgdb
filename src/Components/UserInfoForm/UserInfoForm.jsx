import './UserInfoForm.css'
import Input from "../Input/Input.jsx";
import TextArea from "../TextArea/TextArea.jsx";
import Button from "../Button/Button.jsx";
import Veil from "../Veil/Veil.jsx";
import {useState} from "react";

function UserInfoForm({onSubmit}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [creatureType, setCreatureType] = useState("")
    const [userBio, setUserBio] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    return (

        <section className="info-form-wrapper">
            <Veil>
            <form className="user-info-form-container" onSubmit={onSubmit}>
                <Input
                    labelText="first name:"
                    name="first-name"
                    type="text"
                    placeHolder="first name"
                    required="required"
                    id="firstName"
                    htmlFor="firstName"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value)
                    }}

               />
                <Input
                    labelText="last name:"
                    name="last-name"
                    type="text"
                    placeHolder="last name"
                    required="required"
                    id="lastName"
                    htmlFor="lastName"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value)
                    }}
                />
                <Input
                    labelText="user name:"
                    name="user-name"
                    type="text"
                    placeHolder="user name"
                    required="required"
                    id="userName"
                    htmlFor="userName"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
                <Input
                    labelText="creature type:"
                    name="creature-type"
                    type="text"
                    placeHolder="What kind of creature are you?"
                    required="required"
                    id="creatureType"
                    htmlFor="creatureType"
                    value={creatureType}
                    onChange={(e) => {
                        setCreatureType(e.target.value)
                    }}
                />
                <TextArea
                    labelText="user bio:"
                    name="userBio"
                    htmlFor="userBio"
                    id="userBio"
                    placeholder="Write something about yourself"
                    value={userBio}
                    onChange={(e) => {
                        setUserBio(e.target.value)
                    }}
                />
                <Input
                    labelText="profile picture:"
                    name="profile-picture"
                />
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
                    }}
                />
                <Button
                    type="submit"
                    buttonContent="Submit"
                />
            </form>
        </Veil>
        </section>

    )
}

export default UserInfoForm