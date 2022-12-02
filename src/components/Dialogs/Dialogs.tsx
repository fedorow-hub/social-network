import { Field, reduxForm } from 'redux-form';

import React from 'react';

import {Textarea} from '../Common/FormControlls/FormControlls';

import {maxLengthCreator, required} from '../Utils/Validators/Validators';

import {DialogsDataType, MessagesType} from '../../types/types';

// @ts-ignore
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Messages';

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
  );
};

const MessageReduxForm = reduxForm({form: 'messageForm'})(MessageForm);

type PropsType = {
    dialogsData:  Array<DialogsDataType>
    messages: Array<MessagesType>
    sendMessage: (message: string) => void
}

const Dialogs: React.FC<PropsType> = ({dialogsData, messages, sendMessage}) => {
  const DialogElements = dialogsData
    .map(dialog => <DialogItem key={dialog.id} name = {dialog.name} id = {dialog.id}/>);

  const MessageElements = messages
    .map(message => <Message key={message.id} message ={message.message}/>);

  const sendMessages = (values) => {
    sendMessage(values.message);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        {DialogElements}
      </div>
      <div className={s.messages}>
        <div>{MessageElements}</div>
        <MessageReduxForm onSubmit={sendMessages}/>
      </div>
    </div>
  );
};

export default Dialogs;
