import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


let Profile = (props) => {
    if(!props.userProfile){
        return (
            <div><Preloader/></div>
            )
    }
    return (
        <div>
            <img src={props.userProfile.photos.small} alt='image'/>
            <ProfileStatusWithHooks {...props}/>
        </div>

    )

}

export default Profile;