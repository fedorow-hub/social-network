import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    countUsers: number
    pageSize: number
    currentPage: number
    followInProgress: Array<number>
    users: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    unfollowing: (userId: number) => void
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({
                                      countUsers,
                                      pageSize,
                                      currentPage,
                                      onPageChanged,
                                      followInProgress,
                                      users,
                                      unfollowing,
                                      follow
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
                    />)
                }
            </div>
        </div>

    )
}

export default Users;