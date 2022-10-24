import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, setFileUserAva, updateUserStatus} from "../../Redux/profile-reducer";
import React from "react";
import {useParams} from "react-router-dom";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";
import {getId, getUserProfile, getUserStatus} from "../../Redux/profile-selector";
import {getIsFetching} from "../../Redux/users-selector";
import {AppStateType} from "../../Redux/Redux-store";
import {ProfileType} from "../../../types/types";

function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

type MapStateToPropsType = {
    userProfile: ProfileType
    status: string
    authorizedUserId: number
    isFetching: boolean
    //match: any
}

type MapDispatchToPropsType = {
    updateUserStatus: (status: string) => void
    setFileUserAva: (any) => void
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
}

type OwnPropsType = {}


type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class ProfileAPI extends React.Component<PropsType> {

    refreshProfile() {
        let userID = this.props.match.params.id;
        if(!userID) {
            userID = this.props.authorizedUserId;
        }
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.refreshProfile();
        }
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile {...this.props}
                         userProfile={this.props.userProfile}
                         isOwner={!this.props.match.params.id}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         setFileUserAva = {this.props.setFileUserAva}
                />
        </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        userProfile: getUserProfile(state),
        isFetching: getIsFetching(state),
        status: getUserStatus(state),
        authorizedUserId: getId(state)
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {getProfile, getStatus, updateUserStatus, setFileUserAva}),
    withRouter
)(ProfileAPI)