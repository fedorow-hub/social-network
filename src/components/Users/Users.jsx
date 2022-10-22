import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

    return (
        <div>
            <Paginator totalItemsCount={props.countUsers}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />
            <div>
                {
                    props.users.map(u => <User user = {u}
                                               key={u.id}
                                               followInProgress={props.followInProgress}
                                               unfollowing={props.unfollowing}
                                               follow={props.follow}
                    />)
                }
            </div>
        </div>

    )
}

export default Users;