import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => {
    let state = props.store.getState();

    const changeMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    return <Dialogs dialogPage={state.dialogPage} changeMessageBody={changeMessageBody} sendMessage={sendMessage}/>
}*/

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