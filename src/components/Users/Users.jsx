import React from "react";
import styles from "./Users.module.css"
import userImage from "./../../assets/images/user.png"

let Users = (props) => {

    let countPage = Math.ceil(props.countUsers / props.pageSize);

    let pages =[];

    for(let i = 1; i <= countPage; i++){
        pages.push(i)
    }
    return (
        <div>
            <div className={styles.pagination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage }
                                 onClick={()=>{props.onPageChanged(p);}}><span className={styles.page}>{p}</span></span>
                })}
            </div>
            <div>
                {
                    props.users.map(u => <div key={u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userImage} className={styles.image} alt="photo"/>
                        </div>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {"u.location.country"}
                        </div>
                        <div>
                            {"u.location.cityName"}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.following(u.id)}}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>
        </div>

    )
}

export default Users;