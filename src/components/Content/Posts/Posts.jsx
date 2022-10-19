import Post from './Post/Post';
import s from './Posts.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Utils/Validators/Validators";
import {Textarea} from "../../Common/FormControlls/FormControlls";

let maxLength30 = maxLengthCreator(30)
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="post" component={Textarea} type="text" placeHolder="New post" validate={[required, maxLength30]}/>
            <button>Add post</button>
        </form>
    )
}

const PostFormRedux = reduxForm({form: 'post'})(PostForm)

const Posts = (props) => {

    let addPost = (values) => {
        props.addPost(values.post);
    }

    let MessageElements = props.profilePage.Posts
        .map(message => <Post key={message.id} message ={message.message}/>)

    return (
        <div className={s.sidebar}>
            <header>
                <h3>My posts</h3>
            </header>
            <PostFormRedux onSubmit={addPost}/>
            {MessageElements}
        </div>
    );
}

export default Posts;