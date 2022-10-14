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
            state.newMessageBody = action.newBody;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            state.Messages.push(newMessage)
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newBody: text })

export default dialogsReducer;