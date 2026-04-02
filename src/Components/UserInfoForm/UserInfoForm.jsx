import './UserInfoForm.css'
import Input from "../Input/Input.jsx";
import TextArea from "../TextArea/TextArea.jsx";
import Button from "../Button/Button.jsx";
import Veil from "../Veil/Veil.jsx";

function UserInfoForm({
                          onSubmit,
                          firstNameValue,
                          lastNameValue,
                          userNameValue,
                          creatureValue,
                          bioValue,
                          emailValue,
                          passwordValue,
                          onChangeFirstName,
                          onChangeLastName,
                          onChangeUserName,
                          onChangeCreatureType,
                          onChangeBio,
                          onChangeEmail,
                          onChangePassword,
                      }) {

    /*console.log("UserInfoForm firstNameValue:", firstNameValue);*/

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
                        labelText="username:"
                        name="user-name"
                        type="text"
                        value={userNameValue}
                        onChange={onChangeCreatureType}
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