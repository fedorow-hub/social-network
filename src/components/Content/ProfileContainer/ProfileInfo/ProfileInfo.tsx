import { useState } from 'react';

// @ts-ignore
import userImage from '../../../../assets/images/user.png';

import ProfileDataForm from './ProfileDataForm';
import ProfileData from "./ProfileData/ProfileData";
import React from 'react';
import {ProfileType} from "../../../../types/types";

type ProfileInfoPropsType = {
  userProfile:  ProfileType
  isOwner: boolean
  setFileUserAva: (any) => void
  saveProfile: any
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({saveProfile, userProfile, isOwner, ...props }) => {
  const [editMode, setEditMode] = useState(false);

  const onChangeFileUserAva = (e) => {
    if (e.target.files.length) {
      props.setFileUserAva(e.target.files[0]);
    }
  };

  const updateProfileInfo = (formData) => {
    saveProfile(formData)

  }
  return (
    <div>
        {userProfile ? <img
            src={userProfile.photos.large ? userProfile.photos.large : userImage}
            alt="картинка"
        /> : <div></div>}
      {isOwner && <input type={'file'} onChange={onChangeFileUserAva} />}
      {editMode ? (
        <ProfileDataForm userProfile={userProfile} updateProfileInfo={updateProfileInfo}/>
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true);
          }}
          userProfile={userProfile}
          isOwner={isOwner}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
