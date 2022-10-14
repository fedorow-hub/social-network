const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                message: state.newPostText
            }
            state.Posts.push(post);
            state.newPostText='';
            return state;
        case UPDATE_TEXTAREA:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateTextareaActionCreator = (text) => ({ type: UPDATE_TEXTAREA, newText: text })

export default profileReducer;