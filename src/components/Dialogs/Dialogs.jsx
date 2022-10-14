import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../Redux/Dialogs-reducer";


const Dialogs = (props) => {
    let DialogElements = props.state.DialogsData
        .map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>)

    let MessageElements = props.state.Messages
        .map(message => <Message message ={message.message}/>)

    const changeMessageBody = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));
    }

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                <div>{MessageElements}</div>
                <div>
                    <textarea placeholder='Enter your message' value={props.state.newMessageBody} onChange={changeMessageBody}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;