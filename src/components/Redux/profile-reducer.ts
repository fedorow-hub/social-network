import {ProfileAPI} from "../../api/usersAPI/UsersAPI";
import {PhotosType, PostsType, ProfileType} from "../../types/types";

const ADD_POST = 'social_network/profile/ADD-POST';
const SET_PROFILE_USER = 'social_network/profile/SET-PROFILE-USER';
const SET_USER_STATUS = 'social_network/profile/SET-USER-STATUS'
const UPDATE_USER_PHOTO = 'social_network/profile/UPDATE-USER-PHOTO'

let initialState = {
    Posts: [
        {id: 1, message: 'Hi there'},
        {id: 2, message: 'Hi i am fine'}
    ] as Array<PostsType>,
    userProfile: null as ProfileType | null,
    status: ""
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action): InitialStateType => {
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

type AddPostActionType = {
    type: typeof ADD_POST
    post: string
}
export const addPost = (post): AddPostActionType => ({ type: ADD_POST, post})

type SetProfileUserActonType = {
    type: typeof SET_PROFILE_USER
    profile: ProfileType
}
export const setProfileUser = (profile): SetProfileUserActonType => ({ type: SET_PROFILE_USER, profile })

type setUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status): setUserStatusActionType => ({ type: SET_USER_STATUS, status })

type UpdateUserFotoSuccessActionType = {
    type: typeof UPDATE_USER_PHOTO
    photos: PhotosType
}
export const updateUserFotoSuccess = (photos): UpdateUserFotoSuccessActionType => ({ type: UPDATE_USER_PHOTO, photos })


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