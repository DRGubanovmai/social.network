import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPost, setProfile, updateNewPostText} from "../../redux/profileReducer";
import axios from "axios";
import withRouter from "../common/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            if (this.props.isAuth) {
                userId = this.props.userId
            }
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(
            response => {
                this.props.setProfile(response.data);
            }
        );
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isAuth: state.userAuth.isAuth,
        userId: state.userAuth.userId
    }
}

export default connect(mapStateToProps, {addPost, updateNewPostText, setProfile})(withRouter(ProfileContainer));