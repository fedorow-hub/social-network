import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfileUser} from "../../Redux/Profile-reducer";
import React from "react";

class ProfileAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const ProfileContainer = connect(mapStateToProps, {setProfileUser})(ProfileAPI)

export default ProfileContainer;