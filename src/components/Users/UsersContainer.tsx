import {connect} from "react-redux";
import {
    follow,
    unfollowing,
    setAllUsers
} from "../Redux/users-reducer";
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
import {UserType} from "../../types/types";
import {AppStateType} from "../Redux/Redux-store";

type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    countUsers: number
    users: Array<UserType>
    followInProgress: Array<number>
}

type MapDispatchToPropsType = {
    setAllUsers: (currentPage: number, pageSize: number) => void
    unfollowing: (userId: number) => void
    follow: (userId: number) => void
}

type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.setAllUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged =(pageNumber: number) => {
        this.props.setAllUsers(pageNumber, this.props.pageSize)
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
                   unfollowing={this.props.unfollowing}
                   follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType)=>{
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
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {
            setAllUsers, unfollowing, follow
        })
)(UsersContainer)