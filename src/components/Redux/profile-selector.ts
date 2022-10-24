import {AppStateType} from "./Redux-store";

export const getUserProfile = (state: AppStateType) => {
    return state.profilePage.userProfile;
}

export const getUserStatus = (state: AppStateType) => {
    return state.profilePage.status;
}

export const getId = (state: AppStateType) => {
    return state.auth.id;
}