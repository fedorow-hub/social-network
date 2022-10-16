const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA';
const SET_PROFILE_USER = 'SET-PROFILE-USER';

let initialState = {
    Posts: [
        {id: 1, message: 'Hi there'},
        {id: 2, message: 'Hi i am fine'}
    ],
    newPostText: 'New post text',
    userProfile: null
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
        case SET_PROFILE_USER:
            return {
                ...state,
                userProfile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateTextareaActionCreator = (text) => ({ type: UPDATE_TEXTAREA, newText: text })
export const setProfileUser = (profile) => ({ type: SET_PROFILE_USER, profile })

export default profileReducer;