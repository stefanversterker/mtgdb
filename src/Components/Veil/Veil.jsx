import './Veil.css'

function Veil({children, className}) {
    return (

            <div className={`veil ${className}`}>
                {children}
            </div>

    )
}

export default Veil