import "../styles/form.css"
import { useState } from "react"

const Form = ({}) => {
    
    function HandleSubmit(e) {
        e.preventDefault()
        // if(user.includes(e.target[0].value) && user.includes(e.target[1].value)){
        //     alert("You have logged in as " + e.target[0].value)
        // }
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