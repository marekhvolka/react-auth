import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { State } from '../../store/reducer';

type Props = {
  component: any;
  path: string;
  exact?: any;
};

export const ProtectedRoute = ({ component: Component, ...rest }: Props) => {
  const userData = useSelector((state: State) => state.userData);

  return <Route {...rest} render={(props) => (userData ? <Component {...props} /> : <Redirect to="/login" />)} />;
};
