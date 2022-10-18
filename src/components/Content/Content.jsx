import s from './Content.module.css';
import PostsContainer from "./Posts/PostsContainer";
import ProfileContainer from "./UserProfile/ProfileContainer";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";

const Content = () => {
    return (
        <div className={s.mainPage}>
            <ProfileContainer/>
            <PostsContainer />
        </div>
    );
}

let ContentContainer = WithAuthRedirect(Content);

export default ContentContainer;