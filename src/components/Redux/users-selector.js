export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getCountUsers = (state) => {
    return state.usersPage.countUsers;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowInProgress = (state) => {
    return state.usersPage.followInProgress;
}

