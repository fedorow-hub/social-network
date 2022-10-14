import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div className={s.link}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div className={s.link}>
                <a href='#'>News</a>
            </div>
            <div className={s.link}>
                <a href='#'>Music</a>
            </div>
            <div className={s.link}>
                <a href='#'>Settings</a>
            </div>
        </div>
    );
}

export default Sidebar;