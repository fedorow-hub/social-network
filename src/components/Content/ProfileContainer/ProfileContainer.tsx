import {connect} from 'react-redux';

import React from 'react';
import {useParams} from 'react-router-dom';

import {compose} from 'redux';

import Preloader from '../../Common/Preloader/Preloader';
import {getProfile, getStatus, setFileUserAva, updateUserStatus, saveProfile} from '../../Redux/profile-reducer';
import {getId, getUserProfile, getUserStatus} from '../../Redux/profile-selector';
import {getIsFetching} from '../../Redux/users-selector';
import {AppStateType} from '../../Redux/Redux-store';
import {ProfileType} from '../../../types/types';

import Profile from './Profile';

function withRouter(Children){
  return(props)=>{
    const match  = {params: useParams()};
    return <Children {...props}  match = {match}/>;
  };
}

type MapStateToPropsType = {
    userProfile: ProfileType
    status: string
    authorizedUserId: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    updateUserStatus: (status: string) => void
    setFileUserAva: (any) => void
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    saveProfile: any
}

type OwnPropsType = {}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

  refreshProfile() {
    // @ts-ignore
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
    // @ts-ignore
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.refreshProfile();
    }
  }

  render() {
    return (<>
      {this.props.isFetching ? <Preloader/> : null}
      <Profile {...this.props}
        saveProfile={this.props.saveProfile}
        userProfile={this.props.userProfile}
        // @ts-ignore
        isOwner={!this.props.match.params.id}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        setFileUserAva = {this.props.setFileUserAva}
      />
    </>);
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    userProfile: getUserProfile(state),
    isFetching: getIsFetching(state),
    status: getUserStatus(state),
    authorizedUserId: getId(state)
  };
};

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {getProfile, getStatus, updateUserStatus, setFileUserAva, saveProfile}),
  withRouter
)(ProfileContainer);
