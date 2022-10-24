import React from "react";
import {addPost} from "../../Redux/profile-reducer.ts";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}

const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer;