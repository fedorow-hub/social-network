import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import { Field, reduxForm } from 'redux-form'
import {Textarea} from "../Common/FormControlls/FormControlls";
import {maxLengthCreator, required} from "../Utils/Validators/Validators";

const maxLength40 = maxLengthCreator(40);
const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="message"
                       component={Textarea}
                       validate={[required, maxLength40]}
                       type="text"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'messageForm'})(MessageForm);

const Dialogs = (props) => {
    let DialogElements = props.dialogPage.DialogsData
        .map(dialog => <DialogItem key={dialog.id} name = {dialog.name} id = {dialog.id}/>)

    let MessageElements = props.dialogPage.Messages
        .map(message => <Message key={message.id} message ={message.message}/>)

    const sendMessage = (values) => {
        props.sendMessage(values.message);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                <div>{MessageElements}</div>
                <MessageReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;