
import {getAuthorization} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return  {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS })

export const initializeAPP = () => {
    return (dispatch)=> {
        let promise = dispatch(getAuthorization());
        Promise.all([promise]).then(()=>{
            dispatch(setInitializedSuccess())})
    }
}

export default appReducer;