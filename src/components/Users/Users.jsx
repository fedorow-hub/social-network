import React from "react";
import styles from "./Users.module.css"
import axios from "axios";
import userImage from "./../../assets/images/user.png"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersAC(response.data.totalCount);}
        )
    }

    onPageChanged =(pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)})
    }



    render() {
        let countPage = Math.ceil(this.props.countUsers / this.props.pageSize);

        let pages =[];

        for(let i = 1; i <= countPage; i++){
            pages.push(i)
        }

        return (
            <div>
                <div className={styles.pagination}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectedPage }
                        onClick={()=>{this.onPageChanged(p);}}><span className={styles.page}>{p}</span></span>
                    })}
                </div>
                <div>
                    {
                        this.props.users.map(u => <div key={u.id}>
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
                                    ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=>{this.props.following(u.id)}}>Follow</button>}
                            </div>
                        </div>)
                    }
                </div>
            </div>

        )
    }
}

export default Users;