import './ButtonSmall.css'

/*import { Routes, Route } from 'react-router-dom';*/

function ButtonSmall({buttonContent, className, onClick}) {
    return (

        <div className="button-small">
            <button className={className}
                    type="button"
                    onClick={onClick}
            >
                {buttonContent}
            </button>

        </div>
    )
}

export default ButtonSmall