import React from "react";
import style from "./Users.module.css"
import axios from "axios";
import userImage from "./../../assets/images/user.png"

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)})
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userImage} className={style.image} alt={photo}/>
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
                                ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{this.props.following(u.id)}}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;