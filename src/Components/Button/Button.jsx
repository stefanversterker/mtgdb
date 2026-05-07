import './Button.css'

function Button({buttonContent, onClick, className, type, disabled}) {
    return (

            <button
                className={`button ${className}`}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {buttonContent}
            </button>
    )
}

export default Button