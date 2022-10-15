import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return{
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        changeMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;