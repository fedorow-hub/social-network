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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        countUsers: state.usersPage.countUsers,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setCurrentPage, setTotalUsers,
            toggleFollowInProgress, setUserThinkCreator, unfollowing, follow
        })
)(UsersAPI)