import './Veil.css'
/*import { Routes, Route } from 'react-router-dom';*/

function Veil({children}) {
    return (

        <div className="veil">
            {children}
        </div>
    )
}

export default Veil