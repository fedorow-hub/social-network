import {authorizationAPI} from "../../api/usersAPI/UsersAPI";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'social_network/auth/SET-AUTH-DATA';

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export type InitialStateType = typeof initialState;


const authReducer = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type setAuthUserDataActionPayloadType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

type setAuthUserDataActionType = {
    type: typeof SET_AUTH_DATA,
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (id, email, login, isAuth): setAuthUserDataActionType => ({
    type: SET_AUTH_DATA,
    payload: {id, email, login, isAuth}
})

export const getAuthorization = () => async (dispatch) => {
    let responce = await authorizationAPI.authorization();
    if (responce.data.resultCode === 0) {
        let {id, email, login} = responce.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let responce = await authorizationAPI.login(email, password, rememberMe);
    if (responce.data.resultCode === 0) {
        dispatch(getAuthorization());
    } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let responce = await authorizationAPI.logout();
    if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;