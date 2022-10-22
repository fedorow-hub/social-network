import React from "react";
import styles from "./Users.module.css"
import userImage from "./../../assets/images/user.png"
import {NavLink} from "react-router-dom";

let User = ({user, followInProgress, unfollowing, follow}) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userImage} className={styles.image}
                         alt="photo"/>
                </NavLink>
            </div>
            <div>
                {user.name}
            </div>
            <div>
                {"user.location.country"}
            </div>
            <div>
                {"user.location.cityName"}
            </div>
            <div>
                {user.status}
            </div>
            <div>
                {user.followed
                    ? <button disabled={followInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollowing(user.id)
                              }
                              }>Unfollow</button>
                    : <button disabled={followInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>}
            </div>
        </div>
    )
}

export default User;