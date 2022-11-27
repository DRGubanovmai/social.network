import React from "react";
import post from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={post.item}>
            <img
                src={'https://avatars.mds.yandex.net/i?id=0a07125b1707daca2291f4970d23fbdfa9e86731-5737861-images-thumbs&n=13'}/>
            {props.message}
            <div>
                <span>like </span><span>{props.likes}</span>
            </div>
        </div>);
}

export default Post;