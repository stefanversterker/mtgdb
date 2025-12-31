import './Button.css'
/*import { Routes, Route } from 'react-router-dom';*/

function Button({buttonContent}) {
    return (

        <div>
            <button className="button" type="button">
                {buttonContent}
            </button>
        </div>
    )
}

export default Button