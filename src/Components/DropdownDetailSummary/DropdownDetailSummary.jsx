import './DropdownDetailSummary.css'
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

function DropdownDetailSummary({children, summaryLeft, summaryRight}) {
    return (

        <article>
            <details open className="dropdown-container purple-border">
                <summary className="summary-container">
                    {/*<h3>{summaryLeft}</h3>*/}
                    <form className="name-editor">
                        <Input value={summaryLeft} className="name-editor-field"

                        />
                        <Button buttonContent="save name" className="name-editor-button"></Button>
                    </form>
                    {summaryRight}
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