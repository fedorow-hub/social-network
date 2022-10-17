import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;