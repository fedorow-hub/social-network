import {authorizationAPI} from "../../api/usersAPI/UsersAPI";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'social_network/auth/SET-AUTH-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (id, email, login, isAuth) => ({
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