import React from "react";
import profile from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";

const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (<div className={profile.content}>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>);
}

export default Profile;