import React from "react";
import {addPostActionCreator, updateTextareaActionCreator} from "../../Redux/Profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateNewPostText =(text)=> {
        props.store.dispatch(updateTextareaActionCreator(text));
    }

    return <Posts state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>;
}

export default PostsContainer;