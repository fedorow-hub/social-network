import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    const changeMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    return <Dialogs dialogPage={state.dialogPage} changeMessageBody={changeMessageBody} sendMessage={sendMessage}/>
}

export default DialogsContainer;