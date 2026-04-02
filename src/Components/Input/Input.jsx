import './Input.css'

function Input({htmlFor, labelText, type, id, name, value, onChange, placeHolder, required, className}) {

    /*console.log("Input value:", value);*/

    return (



        <div className="label-and-input">
            <label htmlFor={htmlFor}>
                {labelText}
                <input
                    className={`form-input ${className}`}
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