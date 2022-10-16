import s from './Content.module.css';

import PostsContainer from "./Posts/PostsContainer";
import ProfileContainer from "./UserProfile/ProfileContainer";

const Content = () => {
    return (
        <div className={s.mainPage}>
            <ProfileContainer/>
            <PostsContainer />
        </div>
    );
}

export default Content;