import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store=store;

export default store;