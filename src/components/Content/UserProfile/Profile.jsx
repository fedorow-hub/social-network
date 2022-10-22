import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


let Profile = ({userProfile, ...props}) => {
    if(!userProfile){
        return (
            <div><Preloader/></div>
            )
    }
    return (
        <div>
            <img src={userProfile.photos.small} alt='image'/>
            <ProfileStatusWithHooks {...props}/>
        </div>

    )

}

export default Profile;