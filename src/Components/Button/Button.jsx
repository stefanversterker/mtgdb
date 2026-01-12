import './Button.css'
/*import { Routes, Route } from 'react-router-dom';*/

function Button({buttonContent, onClick, className}) {
    return (

        <div>
            <button
                className={`button ${className}`}
                type="button"
                onClick={onClick}
            >
                {buttonContent}
            </button>
        </div>
    )
}

export default Button