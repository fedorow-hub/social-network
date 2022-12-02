import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import React, {Component, lazy, Suspense} from 'react';

import {connect, Provider} from 'react-redux';

import Sidebar from '../Sidebar/Sidebar';
import HeaderContainer from '../Header/HeaderContainer';
import Login from '../Login/Login';


import {initializeAPP} from '../Redux/app-reducer.ts';
import Preloader from '../Common/Preloader/Preloader';
import UsersContainer from '../Users/UsersContainer.tsx';
import store from "../Redux/Redux-store";

const DialogsContainer = lazy(() => import('../Dialogs/DialogsContainer'));
/*const UsersContainer = lazy(() => import('./components/Users/UsersContainer.tsx'));*/
const Content = lazy(() => import('../Content/Content'));

class App extends Component {

  componentDidMount() {
    this.props.initializeAPP();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader/>;
    }
    return (
      <div className="wrapper">
        <HeaderContainer/>
        <Sidebar/>
        <Suspense fallback={<Preloader/>}>
          <Routes>
            <Route path="/" element={<UsersContainer/>}/>
            <Route path="/messages/*" element={<DialogsContainer/>}/>
            <Route path="/profile/*" element={<Content/>}/>
            <Route path="/profile/:id" element={<Content/>}/>
            <Route path="/users/*" element={<UsersContainer/>}/>
            <Route path="/login/" element={<Login/>}/>
          </Routes>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  };
};

const AppContainer = connect(mapStateToProps, {initializeAPP})(App);

const MainAPP = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>)
}

export default MainAPP;
