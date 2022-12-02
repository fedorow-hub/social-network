import { useParams } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import { compose } from 'redux';

import { logout, setAuthUserData } from '../Redux/auth-reducer';

import {getIsAuth, getLogin, getPhotoAuth} from '../Redux/auth-selector';

import Header from './Header';
import {number} from "prop-types";
import {AppStateType} from "../Redux/Redux-store";

/*export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}*/

type MapStateToPropsType = {
  isAuth: boolean
  login: string
  photoAuth: string
}

type MapDispatchToPropsType = {
  logout: () => any
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainerWithUrlData extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
  photoAuth: getPhotoAuth(state)
});

export default compose(
  /*withRouter,*/
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(mapStateToProps, { logout })
)(HeaderContainerWithUrlData);
