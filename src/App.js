import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ContentContainer from "./components/Content/Content";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeAPP} from "./components/Redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends Component {

    componentDidMount() {
        this.props.initializeAPP()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <Routes>
                    <Route path='/messages/*' element={<DialogsContainer/>}/>
                    <Route path='/profile/*' element={<ContentContainer/>}/>
                    <Route path='/profile/:id' element={<ContentContainer/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                    <Route path='/login/' element={<Login/>}/>
                </Routes>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeAPP})(App);
