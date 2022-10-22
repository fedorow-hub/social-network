import {UserAPI} from "../../api/usersAPI/UsersAPI";
import {updateObjectInArray} from "../Utils/objects_helper";

const FOLLOW = 'social_network/users/FOLLOW';
const UNFOLLOW = 'social_network/users/UNFOLLOW';
const SET_USERS = 'social_network/users/SET-USERS';
const SET_CURRENT_PAGE = 'social_network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS = 'social_network/users/SET-TOTAL-USERS';
const TOGGLE_IS_FETCHING = 'social_network/users/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'social_network/users/TOGGLE-FOLLOW-IN-PROGRESS';

let initialState = {
    users: [],
    currentPage: 1,
    countUsers: 0,
    pageSize: 100,
    isFetching: false,
    followInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return  {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_TOTAL_USERS:
            return {
                ...state, countUsers: action.totalUsers
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : [state.followInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
}

export const following = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId })

export const setUserThinkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await UserAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
    dispatch(setCurrentPage(currentPage));
}

const followUnfollowFlow = async (dispatch, id, userAPI, actionCreator) => {
    dispatch(toggleFollowInProgress(true, id));
    let data = await userAPI(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowInProgress(false, id));
}

export const unfollowing = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, id, UserAPI.unfollow.bind(UserAPI), unfollow);
}

export const follow = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, id, UserAPI.follow.bind(UserAPI), following);
}

export default usersReducer;