import React from "react";
import {addPostActionCreator, updateTextareaActionCreator} from "../../Redux/Profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

/*const PostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateNewPostText =(text)=> {
        props.store.dispatch(updateTextareaActionCreator(text));
    }

    return <Posts state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>;
}*/

let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateTextareaActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;