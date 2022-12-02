import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

const store = {
  _state: {
    dialogPage: {
      DialogsData: [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Andrey' }
      ],
      Messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'Hi!' }
      ],
      newMessageBody: ''
    },
    profilePage: {
      Posts: [
        { id: 1, message: 'Hi there' },
        { id: 2, message: 'Hi i am fine' }
      ],
      newPostText: 'New post text'
    }
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
};

export default store;
window.store = store;