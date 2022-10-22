import { Field, reduxForm } from 'redux-form'
import {Input} from "../Common/FormControlls/FormControlls";
import {maxLengthCreator, required} from "../Utils/Validators/Validators";
import {login} from "../Redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import style from "./../Common/FormControlls/FormControlls.module.css";
import {getIsAuth} from "../Redux/auth-selector";


let maxLength30 = maxLengthCreator(30)
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" component={Input} type="email" validate={[required, maxLength30]} />
            </div>
            <div>
                <Field name="password" component={Input} type="password" validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field name="rememberMe" component={Input} type="checkbox" />
            </div>
            {error && <div className={style.formSummaryError}>
                {error}

            </div>}
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    let onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth === true) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state)
    }
}

export default connect(mapStateToProps, {login})(Login);