import React from 'react';

import { NavLink } from 'react-router-dom';

import { UserType } from '../../types/types';

// @ts-ignore
import styles from './Users.module.css';
// @ts-ignore
import userImage from './../../assets/images/user.png';
import {Button} from "antd";

type PropsType = {
  user: UserType
  followInProgress: Array<number>
  unfollowing: (userId: number) => void
  follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followInProgress, unfollowing, follow }) => {
  return (
    <div>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userImage} className={styles.image}
            alt="картинка" />
        </NavLink>
      </div>
      <div>
        {user.name}
      </div>
      <div>
        {'user.location.country'}
      </div>
      <div>
        {'user.location.cityName'}
      </div>
      <div>
        {user.status}
      </div>
      <div>
        {user.followed
          ? <Button disabled={followInProgress.some(id => id === user.id)}
            onClick={() => {
              unfollowing(user.id);
            }
            }>Unfollow</Button>
          : <Button disabled={followInProgress.some(id => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}>Follow</Button>}
      </div>
    </div>
  );
};

export default User;
