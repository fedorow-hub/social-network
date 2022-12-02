import { Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import {AppStateType} from "../components/Redux/Redux-store";

type MapSatateToPropsForRedirectType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapSatateToPropsForRedirectType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component<MapSatateToPropsForRedirectType> {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to={'/login'} />;
      }
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
