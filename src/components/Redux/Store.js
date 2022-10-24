import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        dialogPage: {
            DialogsData: [
                {id: 1, name: 'Sergey'},
                {id: 2, name: 'Andrey'}
            ],
            Messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'Hi!'}
            ],
            newMessageBody: ''
        },
        profilePage: {
            Posts: [
                {id: 1, message: 'Hi there'},
                {id: 2, message: 'Hi i am fine'}
            ],
            newPostText: 'New post text'
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscriber(observe) {
        this._callSubscriber = observe;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;