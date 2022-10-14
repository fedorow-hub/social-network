import Post from './Post/Post';
import s from './Posts.module.css';
import React from "react";

const Posts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText =()=> {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let MessageElements = props.profilePage.Posts
        .map(message => <Post message ={message.message}/>)

    return (
        <div className={s.sidebar}>
            <header>
                <h3>My posts</h3>
            </header>
            <textarea onChange={updateNewPostText} value={props.profilePage.newPostText} ref={newPostElement}/>
            <button onClick={addPost}>Add post</button>
            {MessageElements}
        </div>
    );
}

export default Posts;