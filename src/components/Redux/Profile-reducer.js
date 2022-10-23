import {ProfileAPI} from "../../api/usersAPI/UsersAPI";
const ADD_POST = 'social_network/profile/ADD-POST';
const SET_PROFILE_USER = 'social_network/profile/SET-PROFILE-USER';
const SET_USER_STATUS = 'social_network/profile/SET-USER-STATUS'
const UPDATE_USER_PHOTO = 'social_network/profile/UPDATE-USER-PHOTO'

let initialState = {
    Posts: [
        {id: 1, message: 'Hi there'},
        {id: 2, message: 'Hi i am fine'}
    ],
    userProfile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                message: action.post
            }
            return {
                ...state,
                Posts: [...state.Posts, post]
            }
        case SET_PROFILE_USER:
            return {
                ...state,
                userProfile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_USER_PHOTO:

            return {
                ...state, userProfile: {...state.userProfile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPost = (post) => ({ type: ADD_POST, post})
export const setProfileUser = (profile) => ({ type: SET_PROFILE_USER, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const updateUserFotoSuccess = (photos) => ({ type: UPDATE_USER_PHOTO, photos })

export const getProfile = (id) => async (dispatch) => {

    let data = await ProfileAPI.getProfile(id);
    dispatch(setProfileUser(data));

}

export const getStatus = (userId) => async (dispatch) => {
    //dispatch(toggleIsFetching(true));
    let responce = await ProfileAPI.getStatus(userId);
    dispatch(setUserStatus(responce.data));
    //dispatch(toggleIsFetching(false));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let responce = await ProfileAPI.updateStatus(status);
    if (responce.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const setFileUserAva = (file) => async (dispatch) => {
    let responce = await ProfileAPI.updateFile(file);
    if (responce.data.resultCode === 0) {
        dispatch(updateUserFotoSuccess(responce.data.data.photos));
    }
}

export default profileReducer;