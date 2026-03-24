import './DropdownDetailSummary.css'
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

function DropdownDetailSummary({children, value, onChange}) {
    return (

        <article>
            <details open className="dropdown-container purple-border">
                <summary className="summary-container">
                    <form className="name-editor">
                        <Input
                            type="text"
                            value={value}
                            onChange={onChange}
                            className="name-editor-field"
                        />
                        <Button buttonContent="save name"
                                className="name-editor-button"
                        >

                        </Button>
                    </form>
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