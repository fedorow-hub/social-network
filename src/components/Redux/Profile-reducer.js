const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA';

let initialState = {
    Posts: [
        {id: 1, message: 'Hi there'},
        {id: 2, message: 'Hi i am fine'}
    ],
    newPostText: 'New post text'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                message: state.newPostText
            }
            return {
                ...state,
                newPostText: '',
                Posts: [...state.Posts, post]
            }
        case UPDATE_TEXTAREA:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateTextareaActionCreator = (text) => ({ type: UPDATE_TEXTAREA, newText: text })

export default profileReducer;