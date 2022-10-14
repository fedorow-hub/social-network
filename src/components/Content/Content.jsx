import s from './Content.module.css';

import PostsContainer from "./Posts/PostsContainer";

const Content = (props) => {
    return (
        <div className={s.mainPage}>
            <div>
                ava + descriptions
            </div>
            <PostsContainer store={props.store} />
        </div>
    );
}

export default Content;