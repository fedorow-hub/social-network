import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer
})

let store = createStore(reducers);

export default store;