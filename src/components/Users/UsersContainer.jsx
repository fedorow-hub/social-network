import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, unfollowAC} from "../Redux/Users-reducer";
import Users from "./Users";



let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        countUsers: state.usersPage.countUsers
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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersAC: (users) => {
            dispatch(setTotalUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;