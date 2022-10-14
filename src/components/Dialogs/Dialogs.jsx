import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {
    let DialogElements = props.dialogPage.DialogsData
        .map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>)

    let MessageElements = props.dialogPage.Messages
        .map(message => <Message message ={message.message}/>)

    const changeMessageBody = (e) => {
        let body = e.target.value;
        props.changeMessageBody(body);
    }

    const sendMessage = () => {
        props.sendMessage();
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                <div>{MessageElements}</div>
                <div>
                    <textarea placeholder='Enter your message' value={props.dialogPage.newMessageBody} onChange={changeMessageBody}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;