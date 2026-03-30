import './TextArea.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";

function TextArea({htmlFor, labelText, name, value, onChange}) {

    return (

        <div className="label-and-input">
            <label htmlFor={htmlFor}>
                {labelText}
                <textarea
                    className="textarea"
                    name={name}
                    id={htmlFor}
                    value={value}
                    onChange={onChange}
                    cols="30"
                    rows="10"
                >
                </textarea>
            </label>
        </div>

    )
}

export default TextArea