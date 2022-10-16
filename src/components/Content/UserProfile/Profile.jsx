import Preloader from "../../Common/Preloader/Preloader";


let Profile = (props) => {
    if(!props.userProfile){
        return (
            <div><Preloader/></div>
            )
    }
    return (
        <div>
            <img src={props.userProfile.photos.small} alt='image'/>
        </div>
    )

}

export default Profile;