import './DropdownDetailSummary.css'

function DropdownDetailSummary({children,summaryLeft, summaryRight}) {
    return (

        <article>
            <details open className="dropdown-container purple-border">
                <summary className="summary-container">
                    <h3>{summaryLeft}</h3>
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