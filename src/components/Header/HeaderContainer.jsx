import Header from "./Header";
import {useParams} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../Redux/auth-reducer";
import {authorization} from "../../api/usersAPI/UsersAPI";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class HeaderContainerWithUrlData extends React.Component {

    componentDidMount() {
        authorization()
            .then(data => {

                if(data.resultCode === 0){
                    let {id, email, login} = data.data;
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
