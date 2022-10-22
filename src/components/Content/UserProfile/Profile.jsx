import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userImage from "./../../../assets/images/user.png";


let Profile = ({userProfile, ...props}) => {
    if(!userProfile){
        return (
            <div><Preloader/></div>
            )
    }
    return (
        <div>
            <img src={userProfile.photos.large || userImage} alt='image'/>
            <ProfileStatusWithHooks {...props}/>
        </div>

    )

}

export default Profile;