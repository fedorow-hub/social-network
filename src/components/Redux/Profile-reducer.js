import {ProfileAPI} from "../../api/usersAPI/UsersAPI";
import {toggleIsFetching} from "./Users-reducer";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET-PROFILE-USER';
const SET_USER_STATUS = 'SET-USER-STATUS'

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
        default:
            return state;
    }
}

export const addPost = (post) => ({ type: ADD_POST, post})
export const setProfileUser = (profile) => ({ type: SET_PROFILE_USER, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile = (id) => {
    return (dispatch)=> {
        dispatch(toggleIsFetching(true));
        ProfileAPI.getProfile(id)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setProfileUser(data));
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch)=> {
        ProfileAPI.getStatus(userId)
            .then(responce => {
                dispatch(setUserStatus(responce.data));
            })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch)=> {
        ProfileAPI.updateStatus(status)
            .then(responce => {
                if(responce.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            })
    }
}

export default profileReducer;