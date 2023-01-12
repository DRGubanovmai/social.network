import React from "react";
import {Field, reduxForm} from "redux-form";
import login from "./LoginForm.module.css"
let LoginForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <Field className={login.loginForm} name={'login'} placeholder={'Login'} component={"input"}/>
          <Field className={login.loginForm} name={'password'} placeholder={'Password'} component={"input"}/>
          <Field name={'rememberMe'} component={"input"} type={"checkbox"}/> <span className={login.rememberMe} >remember me</span>
          <button className={login.loginForm}>Login</button>
      </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;