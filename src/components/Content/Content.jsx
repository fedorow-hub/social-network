import s from './Content.module.css';
import PostsContainer from "./Posts/PostsContainer";
import ProfileContainer from "./UserProfile/ProfileContainer";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const Content = () => {
    return (
        <div className={s.mainPage}>
            <ProfileContainer/>
            <PostsContainer />
        </div>
    );
}

export default compose(
    WithAuthRedirect
)(Content)