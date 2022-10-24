import userImage from "../../../../assets/images/user.png";

const ProfileInfo = ({userProfile, isOwner, ...props}) => {
    const onChangeFileUserAva = (e) => {
        if(e.target.files.length) {
            props.setFileUserAva(e.target.files[0]);
        }

    }
    return (<div>
            <img src={userProfile.photos.large ? userProfile.photos.large: userImage} alt='image'/>
            {isOwner && <input type={"file"} onChange={onChangeFileUserAva}/>}
    </div>
    )
}

export default ProfileInfo;
