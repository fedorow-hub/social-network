import {DialogsDataType, MessagesType} from '../../types/types';

const SEND_MESSAGE = 'social_network/dialog/SEND-MESSAGE';

const initialState = {
  DialogsData: [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Andrey'}
  ] as Array<DialogsDataType>,
  Messages: [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'Hi!'}
  ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: SendMessageActionCreatorType): InitialStateType => {
  switch (action.type) {
  case SEND_MESSAGE:
    const newMessage = {
      id: 4,
      message: action.message
    };
    return {
      ...state,
      Messages: [...state.Messages, newMessage]
    };
  default:
    return state;
  }
};

export type SendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE
    message: string
}

export const sendMessageActionCreator = (message): SendMessageActionCreatorType =>
    ({ type: SEND_MESSAGE, message });

export default dialogsReducer;
