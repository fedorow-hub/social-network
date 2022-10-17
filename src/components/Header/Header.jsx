import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    debugger
    return (
        <div className={s.header}>
            {props.isAuth ? <div>{props.login}</div>
                :<NavLink to={'/login'}>login</NavLink>}
        </div>
    );
}

export default Header;
