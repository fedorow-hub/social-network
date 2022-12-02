import React from "react";
// @ts-ignore
import s from "../ProfileInfo.module.css";
import {ProfileType} from "../../../../../types/types";

type ProfileDataType = {
    userProfile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({ userProfile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            {userProfile
                ? <div>
                    <div>
                        <b>Full name:</b> {userProfile.fullName}
                    </div>
                    <div>
                        <b>About Me:</b> {userProfile.aboutMy}
                    </div>
                    <div>
                        <b>Looking for a job:</b> {userProfile.lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    {userProfile.lookingForAJob && (
                        <div>
                            <b>My professionals skills:</b>{' '}
                            {userProfile.lookingForAJobDescription}
                        </div>
                    )}
                    <div>
                        <b>Contacts:</b>
                        {Object.keys(userProfile.contacts).map((key) => {
                            if(userProfile.contacts[key]) {
                                return (
                                    <Contact
                                        key={key}
                                        contactType={key}
                                        contactValue={userProfile.contacts[key]}
                                    />
                                );
                            }

                        })}
                    </div>
                </div>
                : <div></div>
            }
        </div>
    );
};

const Contact = ({ contactType, contactValue }) => {
    return (
        <div className={s.contacts}>
            <b>{contactType}:</b>
            {contactValue}
        </div>
    );
};

export default ProfileData;
