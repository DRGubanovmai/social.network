import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
    }
}

export let withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) return (<Navigate to={'/login'}/>)
        return <Component {...props}/>
    };

    return connect(mapStateToProps)(RedirectComponent);
}