import './ButtonSmall.css'

/*import { Routes, Route } from 'react-router-dom';*/

function ButtonSmall({buttonContent, className, onClick}) {
    return (


            <button className={`button-small ${className}`}
                    type="button"
                    onClick={onClick}
            >
                {buttonContent}
            </button>
    )
}

export default ButtonSmall