import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from 'redux';

import thunkMiddleware from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';

import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';

const rootReducer = combineReducers({
  dialogPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//let state: AppStateType (демонстрация функциональности ReturnType<RootReducerType>)
//state.app

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store;
export default store;
