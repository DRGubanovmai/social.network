import React from "react";
import header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    let onLogin = () => {
        window.open("https://social-network.samuraijs.com/login")
    }

    return (
        <header className={header.header}>
            <img className={header.logo}
                 src={'https://i.pinimg.com/originals/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.png'}/>
            <div className={header.login}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'} onClick={onLogin}>Login</NavLink>
                }
            </div>
        </header>);
}

export default Header;