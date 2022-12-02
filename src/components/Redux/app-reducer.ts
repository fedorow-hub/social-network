import {getAuthorization} from './auth-reducer';

const SET_INITIALIZED_SUCCESS = 'social_network/app/SET_INITIALIZED_SUCCESS';

const initialState = {
  initialized: false
};

type InitialStateType = typeof initialState;

const appReducer = (state = initialState,
                    action: SetInitializedSuccessActionType): InitialStateType => {
  switch (action.type) {
  case SET_INITIALIZED_SUCCESS:
    return  {
      ...state,
      initialized: true
    };
  default:
    return state;
  }
};

type SetInitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS;
}
export const setInitializedSuccess = (): SetInitializedSuccessActionType => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeAPP = () => {
  return (dispatch)=> {
    const promise = dispatch(getAuthorization());
    Promise.all([promise]).then(()=>{
      dispatch(setInitializedSuccess());});
  };
};

export default appReducer;
