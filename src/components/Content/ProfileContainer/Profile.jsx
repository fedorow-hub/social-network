import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}
                         isOwner={props.isOwner}
                         setFileUserAva={props.setFileUserAva}/>
            <ProfileStatusWithHooks {...props}/>
        </div>

    )

}

export default Profile;