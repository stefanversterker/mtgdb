import './Dropdown.css'

/*import { Routes, Route } from 'react-router-dom';*/

function Dropdown({
                      htmlFor,
                      name,
                      id,
                      optionValue,
                      optionName,
                      children,
                      labelText,
                  }) {
    return (

        <div className="label-and-dropdown">
            <label htmlFor={htmlFor}>
                {labelText}
                <select className="dropdown" name={name} id={id}>
                    {children}
                </select>
            </label>
        </div>
    )
}

export default Dropdown