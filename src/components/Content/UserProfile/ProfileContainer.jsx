import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, setProfileUser, updateUserStatus} from "../../Redux/Profile-reducer";
import React from "react";
import {useParams} from "react-router-dom";
import Preloader from "../../Common/Preloader/Preloader";
import { toggleIsFetching} from "../../Redux/Users-reducer";
import {compose} from "redux";

function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileAPI extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.id;
        if(!userID) {
            userID = this.props.authorizedUserId
        }
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile {...this.props}
                         userProfile={this.props.userProfile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
        </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetching: state.usersPage.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {setProfileUser, toggleIsFetching,
        getProfile, getStatus, updateUserStatus}),
    withRouter
)(ProfileAPI)