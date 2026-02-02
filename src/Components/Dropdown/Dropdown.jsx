import './Dropdown.css'

function Dropdown({
                      htmlFor,
                      name,
                      id,
                      children,
                      labelText,
                      selectedValue,
                      setSelectedValue,
                  }) {

    return (

        <div className="label-and-dropdown">
            <label htmlFor={htmlFor}>
                {labelText}
                <select
                    className="dropdown"
                    name={name}
                    id={id}
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                >
                    {children}
                </select>
            </label>
        </div>
    )
}

export default Dropdown