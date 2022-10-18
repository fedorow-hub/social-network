import Header from "./Header";
import {useParams} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {getAuthorization, setAuthUserData} from "../Redux/auth-reducer";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class HeaderContainerWithUrlData extends React.Component {

    componentDidMount() {
        this.props.getAuthorization()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

let WithUrlDataHeaderContainer = withRouter(HeaderContainerWithUrlData);

const HeaderContainer = connect(mapStateToProps, {setAuthUserData, getAuthorization})(WithUrlDataHeaderContainer)

export default HeaderContainer;
