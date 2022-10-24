import React from "react";
import {NavLink} from "react-router-dom";

type PropType = {
    id: number
    name: string
}
const DialogItem: React.FC<PropType> = ({id, name}) => {
    return (
        <NavLink to={'/messages/' + id}>
            {name}
        </NavLink>
    )
}

export default DialogItem;