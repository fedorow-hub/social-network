import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import {ProfileType} from "../../../types/types";

type ProfilePropsType ={
    userProfile:  ProfileType
    isOwner: boolean
    setFileUserAva: (any) => void
    status: string
    updateUserStatus: (status: string) => void
    saveProfile: any
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo
        userProfile={props.userProfile}
        isOwner={props.isOwner}
        setFileUserAva={props.setFileUserAva}
        saveProfile={props.saveProfile}
      />
      <ProfileStatusWithHooks {...props} />
    </div>
  );
};

export default Profile;
