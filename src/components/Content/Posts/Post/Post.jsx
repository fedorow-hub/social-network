import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.mainPage}>
            <div>
                {props.message}
            </div>
            
        </div>
    );
}

export default Post;