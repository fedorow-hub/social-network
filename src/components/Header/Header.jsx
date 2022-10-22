import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <div className={s.header}>
            {props.isAuth ?
                <div>
                    <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                </div>

                :<NavLink to={'/login'}>login</NavLink>}
        </div>
    );
}

export default Header;
