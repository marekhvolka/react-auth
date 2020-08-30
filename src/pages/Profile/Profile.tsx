import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { State } from '../../store/reducer';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { Button } from '../../atoms/Button/Button';

const Table = styled.table`
  td {
    padding: 10px 20px 10px 0;
    font-size: 20px;
  }
`;

export const Profile = () => {
  const userData = useSelector((state: State) => state.userData);

  if (!userData) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Profile</h1>

      <Table>
        <tbody>
          <tr key="name">
            <td>Name:</td>
            <td>
              {userData.first_name}
              {' '}
              {userData.other_names}
            </td>
          </tr>
          <tr key="address">
            <td>Address:</td>
            <td>
              {userData.address.street}
              ,
              <br />
              {userData.address.town}
              ,
              <br />
              {userData.address.postcode}
              {' '}
              <br />
              {userData.address.county}
            </td>
          </tr>
          <tr key="email">
            <td>Email:</td>
            <td>{userData.email}</td>
          </tr>
          <tr key="mobile">
            <td>Mobile:</td>
            <td>{userData.mobile}</td>
          </tr>
          <tr key="company">
            <td>Company:</td>
            <td>{userData.company}</td>
          </tr>
          <tr key="preferences">
            <td>Preferences to contact:</td>
            <td>
              {userData.preferences.contact.map((value) => (
                <span key={value}>
                  {value},&nbsp;
                  {' '}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>

      <Button type="primary">
        <Link to="/profile-edit">Edit profile</Link>
      </Button>
      <Button>
        <Link to="/">Cancel</Link>
      </Button>
    </div>
  );
};
