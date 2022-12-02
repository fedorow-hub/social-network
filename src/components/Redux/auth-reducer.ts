import {stopSubmit} from 'redux-form';

import {authorizationAPI, StatusCodeEnum} from '../../api/usersAPI/UsersAPI';
import {number} from "prop-types";

const SET_AUTH_DATA = 'social_network/auth/SET-AUTH-DATA';

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  photoAuth: null as string | null
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: SetAuthUserDataActionType): InitialStateType => {
  switch (action.type) {
  case SET_AUTH_DATA:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

type setAuthUserDataActionPayloadType = {
  id: number
  email: string
  login: string
  isAuth: boolean
  photoAuth: string
}

export type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_DATA,
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (id: number, email: string,
                                login: string, isAuth: boolean,
                                photoAuth: string): SetAuthUserDataActionType => ({
  type: SET_AUTH_DATA,
  payload: {id, email, login, isAuth, photoAuth}
});

export const getAuthorization = () => async (dispatch) => {
  const data = await authorizationAPI.authorization();
  if (data.resultCode === StatusCodeEnum.success) {
    const {id, email, login} = data.data;
    const dataFromProfile = await authorizationAPI.getPhotoAuth(id);
    const photoAuth = dataFromProfile.photos.small
    dispatch(setAuthUserData(id, email, login, true, photoAuth));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authorizationAPI.login(email, password, rememberMe);
  if (data.resultCode === StatusCodeEnum.success) {
    dispatch(getAuthorization());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', {_error: message}));
  }
};

export const logout = () => async (dispatch) => {
  const data = await authorizationAPI.logout();
  if (data.resultCode === StatusCodeEnum.success) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};

export default authReducer;
