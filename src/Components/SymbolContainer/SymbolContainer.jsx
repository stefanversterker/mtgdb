import './SymbolContainer.css'
/*import { Routes, Route } from 'react-router-dom';*/

function SymbolContainer({children}) {
    return (

        <div className="yellow-border symbol-container">
            {children}
        </div>
    )
}

export default SymbolContainer