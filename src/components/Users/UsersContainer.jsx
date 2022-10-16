import {connect} from "react-redux";
import {
    following,
    setCurrentPage,
    setTotalUsers,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../Redux/Users-reducer";
import React from "react";
import Users from "./Users";
import axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);}
            )
    }

    onPageChanged =(pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)})
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                      countUsers={this.props.countUsers}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      following={this.props.following}
                      unfollow={this.props.unfollow}/>
            </>
    }
}

let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        countUsers: state.usersPage.countUsers,
        isFetching: state.usersPage.isFetching
    }
}

/*let mapDispatchToProps = (dispatch)=>{
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
        setTotalUsers: (users) => {
            dispatch(setTotalUsersAC(users))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

/*const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);*/

const UsersContainer = connect(mapStateToProps,
    {following, unfollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching})(UsersAPI);

export default UsersContainer;