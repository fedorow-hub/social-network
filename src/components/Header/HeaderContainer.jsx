import Header from "./Header";
import {useParams} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../Redux/auth-reducer.ts";
import {compose} from "redux";
import {getIsAuth, getLogin} from "../Redux/auth-selector";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class HeaderContainerWithUrlData extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
})

export default compose(
    withRouter,
    connect(mapStateToProps, {setAuthUserData, logout})
)
(HeaderContainerWithUrlData)

