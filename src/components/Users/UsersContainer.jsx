import {connect} from "react-redux";
import {
    following,
    setCurrentPage,
    setTotalUsers,
    setUserThinkCreator, toggleFollowInProgress,
    unfollow, unfollowing
} from "../Redux/Users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.setUserThinkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged =(pageNumber) => {
        this.props.setUserThinkCreator(pageNumber, this.props.pageSize)
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
                   unfollowing={this.props.unfollowing}
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
    {following, unfollow, setCurrentPage, setTotalUsers, toggleFollowInProgress, setUserThinkCreator, unfollowing})(UsersAPI);

export default UsersContainer;