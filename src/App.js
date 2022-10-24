import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component, lazy, Suspense} from "react";
import {connect} from "react-redux";
import {initializeAPP} from "./components/Redux/app-reducer.ts";
import Preloader from "./components/Common/Preloader/Preloader";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Content = lazy(() => import('./components/Content/Content'));

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
                <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path='/' element={<UsersContainer/>}/>
                        <Route path='/messages/*' element={<DialogsContainer/>}/>
                        <Route path='/profile/*' element={<Content/>}/>
                        <Route path='/profile/:id' element={<Content/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/login/' element={<Login/>}/>
                    </Routes>
                </Suspense>
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
