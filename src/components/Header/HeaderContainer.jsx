import Header from "./Header";
import {useParams} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../Redux/auth-reducer";
import {compose} from "redux";

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
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    withRouter,
    connect(mapStateToProps, {setAuthUserData, logout})
)
(HeaderContainerWithUrlData)

