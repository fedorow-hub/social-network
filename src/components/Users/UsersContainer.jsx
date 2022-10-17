import {connect} from "react-redux";
import {
    following,
    setCurrentPage,
    setTotalUsers,
    setUsers, toggleFollowInProgress,
    toggleIsFetching,
    unfollow
} from "../Redux/Users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {getUsers} from "../../api/usersAPI/UsersAPI";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount);}
            )
    }

    onPageChanged =(pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)})
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
                   unfollow={this.props.unfollow}
                   followInProgress={this.props.followInProgress}
                   toggleFollowInProgress={this.props.toggleFollowInProgress}
            />
        </>
    }
}

let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        countUsers: state.usersPage.countUsers,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
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
    {following, unfollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching, toggleFollowInProgress})(UsersAPI);

export default UsersContainer;