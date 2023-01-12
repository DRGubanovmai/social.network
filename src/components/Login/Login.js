import React from "react";
import LoginForm from "../form/LoginForm";

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log("submit", formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>)
}


export default Login;