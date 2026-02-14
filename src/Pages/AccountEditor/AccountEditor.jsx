import './AccountEditor.css'
import Veil from "../../Components/Veil/Veil.jsx";
import Input from "../../Components/Input/Input.jsx";
import TextArea from "../../Components/TextArea/TextArea.jsx";
import Button from "../../Components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function AccountEditor() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [creatureType, setCreatureType] = useState("")
    const [userBio, setUserBio] = useState("")
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
            const payload = {};
            console.log(payload)

            if (firstName) payload.first_name = firstName;
            if (lastName) payload.last_name = lastName;
            if (userName) payload.user_name = userName;
            if (creatureType) payload.creature_type = creatureType;
            if (userBio) payload.user_bio = userBio;


            const response = await axios.patch('https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/1',
                payload,
             {
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            console.log(response.data);
            navigate('/account');
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
                    <form onSubmit={handleSubmit}>
                        <Input
                            labelText="first name:"
                            name="first-name"
                            type="text"
                            placeHolder="first name"
                            /*required="required"*/
                            id="firstName"
                            htmlFor="firstName"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                                console.log(firstName)
                            }}

                        />
                        <Input
                            labelText="last name:"
                            name="last-name"
                            type="text"
                            placeHolder="last name"
                            /*required="required"*/
                            id="lastName"
                            htmlFor="lastName"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                                console.log(lastName)
                            }}
                        />
                        <Input
                            labelText="user name:"
                            name="user-name"
                            type="text"
                            placeHolder="user name"
                            /*required="required"*/
                            id="userName"
                            htmlFor="userName"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value)
                                console.log(userName)
                            }}
                        />
                        <Input
                            labelText="creature type:"
                            name="creature-type"
                            type="text"
                            placeHolder="What kind of creature are you?"
                            /*required="required"*/
                            id="creatureType"
                            htmlFor="creatureType"
                            value={creatureType}
                            onChange={(e) => {
                                setCreatureType(e.target.value)
                                console.log(creatureType)
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
                                console.log(userBio)
                            }}
                        />
                        {/*<Input
                            labelText="profile picture:"
                            name="profile-picture"
                        />*/}
                        <Button buttonContent="Save" type="submit"/>
                    </form>
                    {/* <form onSubmit={handleSubmit}>
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
                        <Button buttonContent="Save" type="submit"/>
                    </form>
                    <form onSubmit={handleSubmit}>
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
                        <Button buttonContent="Save" type="submit"/>
                    </form>*/}

                </Veil>
            </section>

        </main>
    )
}

export default AccountEditor