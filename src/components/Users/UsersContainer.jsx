import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../Redux/Users-reducer";
import Users from "./Users";



let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        following: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;