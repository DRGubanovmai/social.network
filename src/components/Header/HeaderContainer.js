import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(
            response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthData(id, login, email);
                }
            }
        );
    }

    render() {
        debugger
        return (<Header {...this.props}/>);

    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
        userId: state.userAuth.userId,
        login: state.userAuth.login,
        email: state.userAuth.email
    }
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);