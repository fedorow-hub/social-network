import {ProfileAPI} from '../../api/usersAPI/UsersAPI';
import {PhotosType, PostsType, ProfileType} from '../../types/types';

const ADD_POST = 'social_network/profile/ADD-POST';
const SET_PROFILE_USER = 'social_network/profile/SET-PROFILE-USER';
const SET_USER_STATUS = 'social_network/profile/SET-USER-STATUS';
const UPDATE_USER_PHOTO = 'social_network/profile/UPDATE-USER-PHOTO';

const initialState = {
  Posts: [
    {id: 1, message: 'Hi there'},
    {id: 2, message: 'Hi i am fine'}
  ] as Array<PostsType>,
  userProfile: null as ProfileType | null,
  status: ''
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
  case ADD_POST:
    const post = {
      id: 3,
      message: action.post
    };
    return {
      ...state,
      Posts: [...state.Posts, post]
    };
  case SET_PROFILE_USER:
    return {
      ...state,
      userProfile: action.profile
    };
  case SET_USER_STATUS:
    return {
      ...state,
      status: action.status
    };
  case UPDATE_USER_PHOTO:

    return {
      ...state, userProfile: {...state.userProfile, photos: action.photos}
    };
  default:
    return state;
  }
};

type ActionTypes = AddPostActionType |
    SetProfileUserActonType | setUserStatusActionType | UpdateUserPhotoSuccessActionType;

type AddPostActionType = {
    type: typeof ADD_POST
    post: string
}
export const addPost = (post): AddPostActionType => ({ type: ADD_POST, post});

type SetProfileUserActonType = {
    type: typeof SET_PROFILE_USER
    profile: ProfileType
}
export const setProfileUser = (profile): SetProfileUserActonType => ({ type: SET_PROFILE_USER, profile });

type setUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status): setUserStatusActionType => ({ type: SET_USER_STATUS, status });

type UpdateUserPhotoSuccessActionType = {
    type: typeof UPDATE_USER_PHOTO
    photos: PhotosType
}
export const updateUserPhotoSuccess = (photos): UpdateUserPhotoSuccessActionType => ({ type: UPDATE_USER_PHOTO, photos });


export const getProfile = (id) => async (dispatch) => {
  const data = await ProfileAPI.getProfile(id);
  dispatch(setProfileUser(data));
};

export const getStatus = (userId) => async (dispatch) => {
  //dispatch(toggleIsFetching(true));
  const response = await ProfileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
  //dispatch(toggleIsFetching(false));
};

export const updateUserStatus = (status) => async (dispatch) => {
  const response = await ProfileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const setFileUserAva = (file) => async (dispatch) => {
  const response = await ProfileAPI.updateFile(file);
  if (response.data.resultCode === 0) {
    dispatch(updateUserPhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch) => {
  const response = await ProfileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    debugger
    dispatch(setProfileUser(response.data));
  }
};

export default profileReducer;
