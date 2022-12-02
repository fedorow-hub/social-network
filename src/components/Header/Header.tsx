import React from 'react';
import { NavLink } from 'react-router-dom';

// @ts-ignore
import s from './Header.module.css';
// @ts-ignore
import userImg from './../../assets/images/user.png'
import {PropsType} from "./HeaderContainer";


const Header: React.FC<PropsType> = (props) => {
  return (
    <div className={s.header}>
      {props.isAuth ? (
        <div className={s.logoutWrap}>
          <img className={s.logImage} src={props.photoAuth ? props.photoAuth : userImg}/>
          <div className={s.logInfo}>{props.login}</div>
          <button onClick={props.logout} className={s.login}>Logout</button>
        </div>
      ) : (
        <NavLink to={'/login'} className={s.login}>login</NavLink>
      )}
    </div>
  );
};

export default Header;
