import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsers,
    setUserThinkCreator, toggleFollowInProgress,
    unfollowing
} from "../Redux/Users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCountUsers,
    getCurrentPage,
    getFollowInProgress,
    getIsFetching,
    getPageSize,
    getUsers
} from "../Redux/users-selector";

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
                   followInProgress={this.props.followInProgress}
                   toggleFollowInProgress={this.props.toggleFollowInProgress}
                   unfollowing={this.props.unfollowing}
                   follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state)=>{
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        countUsers: getCountUsers(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setCurrentPage, setTotalUsers,
            toggleFollowInProgress, setUserThinkCreator, unfollowing, follow
        })
)(UsersAPI)