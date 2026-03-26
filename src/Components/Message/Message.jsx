import './Message.css'

function Message({className, children}) {

    return (

        <div className={`message ${className}`}>
            {children}
        </div>
    )
}

export default Message