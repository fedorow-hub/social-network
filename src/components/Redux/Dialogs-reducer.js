const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    DialogsData: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Andrey'}
    ],
    Messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.newBody
            }
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            return {
                ...state,
                newMessageBody: '',
                Messages: [...state.Messages, newMessage]
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newBody: text })

export default dialogsReducer;