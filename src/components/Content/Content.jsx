import s from './Content.module.css';
import Posts from "./Posts/Posts";

const Content = (props) => {
    return (
        <div className={s.mainPage}>
            <div>
                ava + descriptions
            </div>
            <Posts profilePage={props.profilePage} dispatch={props.dispatch} />
        </div>
    );
}

export default Content;