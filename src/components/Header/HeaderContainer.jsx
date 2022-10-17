import Header from "./Header";
import {useParams} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUserData} from "../Redux/auth-reducer";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class HeaderContainerWithUrlData extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                debugger
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }

            })
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

const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(WithUrlDataHeaderContainer)

export default HeaderContainer;
