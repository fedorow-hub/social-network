import React from 'react';
import {Field, Form, reduxForm} from 'redux-form';

import {Input, Textarea} from '../../../Common/FormControlls/FormControlls';
import { required } from '../../../Utils/Validators/Validators';
import ProfileInfo from "./ProfileInfo";



const ProfileForm = ({userProfile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Full name" name="fullName" component={Input} />
            </div>
            <div>
                <Field placeholder="About me" name="aboutMe" component={Input} />
            </div>
            <div>
                <Field type="checkbox" name="lookingForAJob" component="input"/> Looking for a job
            </div>
            <div>
                <Field placeholder="Description" name="lookingForAJobDescription" component={Textarea} />
            </div>

                <div>
                   {/* <b>Contacts:</b>
                    {Object.keys(userProfile.contacts).map((key) => {
                        return (
                            <Contact
                                key={key}
                                contactType={key}
                                contactValue={userProfile.contacts[key]}
                            />
                        );
                    })}*/}
                </div>
            <button>Save</button>

        </form>
    )
}

const ProfileReduxForm = reduxForm({form: 'profile'})(ProfileForm)


const ProfileDataForm = ({userProfile, updateProfileInfo}) => {

  return (
    <ProfileReduxForm initialValue={userProfile} onSubmit={updateProfileInfo}/>
  );
};

export default ProfileDataForm;
