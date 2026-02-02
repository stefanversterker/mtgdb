import './Button.css'

function Button({buttonContent, onClick, className, type, disabled}) {
    return (

        <div>
            <button
                className={`button ${className}`}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {buttonContent}
            </button>
        </div>
    )
}

export default Button