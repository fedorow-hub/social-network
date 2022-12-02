import React from 'react';
import { NavLink } from 'react-router-dom';

// @ts-ignore
import s from './Sidebar.module.css';


const setActive = ({ isActive }) => (isActive ? `${s.active}` : `${s.link}`);
const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div>
        <NavLink to="/profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/messages" className={setActive}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className={setActive}>
          Users
        </NavLink>
      </div>      
    </div>
  );
};

export default Sidebar;
