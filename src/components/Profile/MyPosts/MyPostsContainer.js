import React from "react";
import MyPosts from "./MyPosts";

let MyPostsContainer = (props) => {
    return <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
}

export default MyPostsContainer;