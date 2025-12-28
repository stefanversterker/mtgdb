import './ButtonSmall.css'
/*import { Routes, Route } from 'react-router-dom';*/

function ButtonSmall({buttonContent, className,}) {
    return (

        <div className="button-small">
            <button className={className}
                    type="button">{buttonContent}</button>
        </div>
    )
}

export default ButtonSmall