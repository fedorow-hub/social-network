import {sendMessageActionCreator,} from "../Redux/Dialogs-reducer";
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
        sendMessage: sendMessageActionCreator
    })
)
(Dialogs)