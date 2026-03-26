import './DropdownDetailSummary.css'
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import Message from "../Message/Message.jsx";

function DropdownDetailSummary({children, value, onChange, onClick, disabled, className, messageChildren, messageClassName}) {
    return (

        <article>
            <details open className="dropdown-container purple-border">
                <summary className="summary-container pink-border">

                    <Input
                        type="text"
                        value={value}
                        onChange={onChange}
                        className="name-editor-field"
                    />
                    <div className="save-button-and-message">
                        <Button buttonContent="save name"
                                className={className}
                                type="button"
                                onClick={onClick}
                                disabled={disabled}
                        />
                        <Message className={messageClassName}>
                            {messageChildren}
                        </Message>
                    </div>

                </summary>
                <div className="dropdown-content">
                    <ul>
                        {children}
                    </ul>
                </div>
            </details>
        </article>
    )
}

export default DropdownDetailSummary