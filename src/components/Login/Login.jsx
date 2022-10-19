import { Field, reduxForm } from 'redux-form'
import {Input} from "../Common/FormControlls/FormControlls";
import {maxLengthCreator, required} from "../Utils/Validators/Validators";


let maxLength20 = maxLengthCreator(20)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component={Input} type="text" validate={[required, maxLength20]} />
            </div>
            <div>
                <Field name="password" component={Input} type="text" validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field name="rememberMe" component={Input} type="checkbox" />
            </div>
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    let onSubmit = (formData) =>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;