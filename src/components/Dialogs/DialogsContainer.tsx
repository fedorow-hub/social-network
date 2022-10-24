import {sendMessageActionCreator,} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../Redux/Redux-store";

let mapStateToProps = (state: AppStateType)=>{
    return{
        dialogsData: state.dialogPage.DialogsData,
        messages: state.dialogPage.Messages
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        sendMessage: sendMessageActionCreator
    })
)
(Dialogs)