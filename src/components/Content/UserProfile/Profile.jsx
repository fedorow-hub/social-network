import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'


let Profile = (props) => {
    debugger
    if(!props.userProfile){
        return (
            <div><Preloader/></div>
            )
    }
    return (
        <div>
            <img src={props.userProfile.photos.small} alt='image'/>
            <ProfileStatus {...props}/>
        </div>

    )

}

export default Profile;