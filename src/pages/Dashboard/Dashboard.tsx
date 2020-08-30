import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducer';
import { Spinner } from '../../atoms/Spinner/Spinner';

export const Dashboard = () => {
  const userData = useSelector((state: State) => state.userData);

  if (!userData) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>
        Welcome back {userData.first_name}!
      </h1>
      <p>This is the dashboard and it's only for logged-in users</p>
    </div>
  );
};
