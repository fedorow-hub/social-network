import {AppStateType} from './Redux-store';

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth;
};

export const getLogin = (state: AppStateType) => {
  return state.auth.login;
};

export const getPhotoAuth = (state: AppStateType) => {
  return state.auth.photoAuth;
};