import {authorizationAPI} from "../../api/usersAPI/UsersAPI";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET-AUTH-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return  {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_DATA, payload: {id, email, login, isAuth} })

export const getAuthorization = () => (dispatch) => {
    return authorizationAPI.authorization()
        .then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
        authorizationAPI.login(email, password, rememberMe)
            .then(responce => {
                if(responce.data.resultCode === 0){
                    dispatch(getAuthorization());
                } else {
                    let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })

}

export const logout = () => (dispatch) => {
        authorizationAPI.logout()
            .then(responce => {
                if(responce.data.resultCode === 0){
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
}

export default authReducer;