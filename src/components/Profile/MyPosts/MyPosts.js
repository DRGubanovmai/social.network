import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    // debugger;
    let postElements = props.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }

    let updateNewPostText = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (<div className={style.content}>
        My posts
        <div>
            <textarea value={props.newPostText} onChange={updateNewPostText} ref={newPost}></textarea>
            <button onClick={addPost}>click</button>
        </div>
        <div>
            {postElements}
        </div>
    </div>);
}

export default MyPosts;