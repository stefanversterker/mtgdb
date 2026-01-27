import './Input.css'

function Input({htmlFor, labelText, type, id, name, value, onChange, placeHolder, required}) {
    return (

        <div className="label-and-input">
            <label htmlFor={htmlFor}>
                {labelText}
                <input
                    className="form-input"
                    placeholder={placeHolder}
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </label>
        </div>
    )
}

export default Input