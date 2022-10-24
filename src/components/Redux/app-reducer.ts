
// @ts-ignore
import {getAuthorization} from "./auth-reducer.ts";

const SET_INITIALIZED_SUCCESS = 'social_network/app/SET_INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action): InitialStateType => {
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

type SetInitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS;
}

export const setInitializedSuccess = (): SetInitializedSuccessActionType => ({ type: SET_INITIALIZED_SUCCESS })

export const initializeAPP = () => {
    return (dispatch)=> {
        let promise = dispatch(getAuthorization());
        Promise.all([promise]).then(()=>{
            dispatch(setInitializedSuccess())})
    }
}

export default appReducer;