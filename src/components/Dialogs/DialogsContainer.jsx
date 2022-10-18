import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state)=>{
    return{
        dialogPage: state.dialogPage,
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        changeMessageBody: updateNewMessageBodyActionCreator,
        sendMessage: sendMessageActionCreator
    })
)
(Dialogs)