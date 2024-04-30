import "../styles/form.css"
import { useState } from "react"

const Form = () => {
    const [user , setUser]  = useState("")
    const [password , setPassword]  = useState("")
    function HandleSubmit(e) {
        setUser("")
        setPassword("")
        e.preventDefault()
        setUser(e.target[0].value);
        setPassword(e.target[1].value)
        alert("You have login as " + user)
    }

    return (      
        <form onSubmit={HandleSubmit} className="Box">
            <h1>Login</h1>
            <div className="first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
            </div>
            <div className="second">
                <label htmlFor="pasword">Password</label>
                <input type="password" name="pasword"/>
            </div>
            <input type="Submit" />
            <p>Don't have an account? <a href="">Register</a></p>
        </form>
    )
}

export default Form