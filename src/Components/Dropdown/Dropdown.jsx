import './Dropdown.css'

/*import { Routes, Route } from 'react-router-dom';*/

function Dropdown({
                      htmlFor,
                      name,
                      id,
                      option1Value,
                      option2Value,
                      option3Value,
                      option4Value,
                      option5Value,
                      option6Value,
                      option7Value,
                      option8Value,
                      option9Value,
                      option1Name,
                      option2Name,
                      option3Name,
                      option4Name,
                      option5Name,
                      option6Name,
                      option7Name,
                      option8Name,
                      option9Name
                  }) {
    return (

        <div className="label-and-dropdown">
            <label htmlFor={htmlFor}>
                <select className="dropdown" name={name} id={id}>
                    <option value={option1Value}>{option1Name}</option>
                    <option value={option2Value}>{option2Name}</option>
                    <option value={option3Value}>{option3Name}</option>
                    <option value={option4Value}>{option4Name}</option>
                    <option value={option5Value}>{option5Name}</option>
                    <option value={option6Value}>{option6Name}</option>
                    <option value={option7Value}>{option7Name}</option>
                    <option value={option8Value}>{option8Name}</option>
                    <option value={option9Value}>{option9Name}</option>
                </select>
            </label>
        </div>
    )
}

export default Dropdown