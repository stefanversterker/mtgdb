import './Button.css'

function Button({buttonContent, onClick, className, type}) {
    return (

        <div>
            <button
                className={`button ${className}`}
                type={type}
                onClick={onClick}
            >
                {buttonContent}
            </button>
        </div>
    )
}

export default Button