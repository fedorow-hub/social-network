import {UserAPI} from "../../api/usersAPI/UsersAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE-FOLLOW-IN-PROGRESS';

let initialState = {
    users: [],
    currentPage: 1,
    countUsers: 0,
    pageSize: 100,
    isFetching: false,
    followInProgress: [2,3]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
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

export const setUserThinkCreator = (currentPage, pageSize) => {

    return (dispatch)=> {
        dispatch(toggleIsFetching(true));
        UserAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsers(data.totalCount));
                dispatch(setCurrentPage(currentPage))
            }
            )
    }
}

export const unfollowing = (id) => {

    return (dispatch)=> {
        dispatch(toggleFollowInProgress(true, id));
        UserAPI.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
               dispatch(toggleFollowInProgress(false, id));}
            )
    }
}

export const follow = (id) => {
    debugger
    return (dispatch)=> {
        debugger
        dispatch(toggleFollowInProgress(true, id))
        UserAPI.follow(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(following(id))
                }
                dispatch(toggleFollowInProgress(false, id))
            })
    }
}

export default usersReducer;