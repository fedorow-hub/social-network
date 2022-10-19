const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    DialogsData: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Andrey'}
    ],
    Messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.message
            }
            return {
                ...state,
                Messages: [...state.Messages, newMessage]
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (message) => ({ type: SEND_MESSAGE, message })

export default dialogsReducer;