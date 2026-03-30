import './UserInfoForm.css'
import Input from "../Input/Input.jsx";
import TextArea from "../TextArea/TextArea.jsx";
import Button from "../Button/Button.jsx";
import Veil from "../Veil/Veil.jsx";

function UserInfoForm({
                          onSubmit,
                          firstNameValue,
                          lastNameValue,
                          creatureValue,
                          bioValue,
                          emailValue,
                          passwordValue,
                          onChangeFirstName,
                          onChangeLastName,
                          onChangeCreatureType,
                          onChangeBio,
                          onChangeEmail,
                          onChangePassword,
                      }) {

    return (

        <section className="info-form-wrapper">
            <Veil>
            <form className="user-info-form-container" onSubmit={onSubmit}>
                <Input
                    labelText="first name:"
                    name="first-name"
                    type="text"
                    value={firstNameValue}
                    onChange={onChangeFirstName}
                />
                <Input
                    labelText="last name:"
                    name="last-name"
                    type="text"
                    value={lastNameValue}
                    onChange={onChangeLastName}
                />
                <Input
                    labelText="creature type:"
                    name="creature-type"
                    type="text"
                    value={creatureValue}
                    onChange={onChangeCreatureType}
                />
                <TextArea
                    labelText="user bio:"
                    value={bioValue}
                    onChange={onChangeBio}
                />
                <Input
                    labelText="email address:"
                    name="email"
                    type="email"
                    value={emailValue}
                    onChange={onChangeEmail}
                />
                <Input
                    labelText="password:"
                    name="password"
                    type="password"
                    value={passwordValue}
                    onChange={onChangePassword}
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