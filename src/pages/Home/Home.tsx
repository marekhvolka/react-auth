import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducer';

export const Home = () => {
  const userData = useSelector((state: State) => state.userData);

  return (
    <div>
      <h1>This is the homepage for our application</h1>
      <p>
        Currently without any content.
        {' '}
        {!userData && (
          <span>
            To access the dashboard, please
            {' '}
            <Link to="/login">Log In</Link>
          </span>
        )}
      </p>
    </div>
  );
};
