import './DropdownDetailSummary.css'
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

function DropdownDetailSummary({children, value, onChange, onClick}) {
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
                        <Button buttonContent="save name"
                                className="name-editor-button "
                                type="button"
                                onClick={onClick}
                                /*disabled={}*/
                        >

                        </Button>

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