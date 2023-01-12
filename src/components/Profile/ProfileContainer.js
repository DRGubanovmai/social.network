import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPost,
    getUserProfileThunk,
    getUserStatusThunk,
    updateNewPostText,
    updateUserStatusThunk
} from "../../redux/profileReducer";
import withRouter from "../common/withRouter";
import {withAuthRedirect} from "../common/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            if (this.props.isAuth) {
                userId = this.props.userId
            }
        }
        this.props.getUserProfileThunk(userId);
        this.props.getUserStatusThunk(userId);
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
        userId: state.userAuth.userId,
        status: state.profilePage.status
    }
}

export default compose(connect(mapStateToProps, {addPost, updateNewPostText, getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk}),
    withRouter,
    withAuthRedirect)(ProfileContainer);
