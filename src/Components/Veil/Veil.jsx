import './Veil.css'
/*import { Routes, Route } from 'react-router-dom';*/

function Veil({children, className}) {
    return (

        <div className={`veil ${className}`}>
            {children}
        </div>
    )
}

export default Veil