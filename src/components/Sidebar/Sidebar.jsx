import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive})=> isActive? `${s.active}`: `${s.link}`
const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div >
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div >
                <NavLink to='/messages' className={setActive}>Messages</NavLink>
            </div>
            <div >
                <NavLink to='/users' className={setActive}>Users</NavLink>
            </div>
            <div >
                <a href='#' className={setActive}>News</a>
            </div>
            <div >
                <a href='#' className={setActive}>Music</a>
            </div>
            <div >
                <a href='#' className={setActive}>Settings</a>
            </div>
        </div>
    );
}

export default Sidebar;