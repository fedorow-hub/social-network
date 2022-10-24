import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    countUsers: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followInProgress: boolean
    /*toggleFollowInProgress: (isFetching: boolean, id: number) => void*/
    users: Array<UserType>
    unfollowing: () => void
    follow: () => void
}

let Users: React.FC<PropsType> = ({
                                      countUsers,
                                      pageSize,
                                      currentPage,
                                      onPageChanged,
                                      followInProgress,
                                      users,
                                      unfollowing,
                                      follow,
                                      /*toggleFollowInProgress*/
                                  }) => {
    return (
        <div>
            <Paginator totalItemsCount={countUsers}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
            />
            <div>
                {
                    users.map(u => <User user={u}
                                         key={u.id}
                                         followInProgress={followInProgress}
                                         unfollowing={unfollowing}
                                         follow={follow}
                                         /*toggleFollowInProgress={toggleFollowInProgress}*/
                    />)
                }
            </div>
        </div>

    )
}

export default Users;