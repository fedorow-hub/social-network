import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

let mapStateToProps = (state)=>{
    return{
        dialogPage: state.dialogPage,
    }
}

const DialogsContainer = connect(mapStateToProps,
    {changeMessageBody: updateNewMessageBodyActionCreator, sendMessage:sendMessageActionCreator})(AuthRedirectComponent);

export default DialogsContainer;