import './Button.css'
/*import { Routes, Route } from 'react-router-dom';*/

function Button({buttonContent, onClick}) {
    return (

        <div>
            <button
                className="button"
                type="button"
                onClick={onClick}
            >
                {buttonContent}
            </button>
        </div>
    )
}

export default Button