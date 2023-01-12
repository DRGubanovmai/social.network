import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.auth();
    }

    render() {
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

export default connect(mapStateToProps, {auth})(HeaderContainer);