import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfileUser} from "../../Redux/Profile-reducer";
import React from "react";
import {useParams} from "react-router-dom";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileAPI extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.id;
        if(!userID) {
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setProfileUser(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

let WithUrlDataProfileAPI = withRouter(ProfileAPI);

const ProfileContainer = connect(mapStateToProps, {setProfileUser})(WithUrlDataProfileAPI)

export default ProfileContainer;