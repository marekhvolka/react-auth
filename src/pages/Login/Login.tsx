import {
  Field, Form, Formik, FormikHelpers,
} from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { media } from '../../theme';
import { handleLogin } from '../../api/login';
import { LoginData } from '../../models/LoginData';
import { LoadUserAction } from '../../store/actions';
import { User } from '../../models/User';

const LoginWrapper = styled.div`
  ${media.nonMobile} {
    width: 500px;
    margin: auto;
  }
`;

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = (values: LoginData, { setErrors }: FormikHelpers<LoginData>) => {
    setIsLoading(true);
    handleLogin(values).then(
      (userData: User) => {
        setIsLoading(false);
        dispatch({
          ...new LoadUserAction(userData),
        });
        history.push('/dashboard');
      },
      (error: Error) => {
        setIsLoading(false);
        setErrors({
          password: error.message,
        });
      },
    );
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onLogin}>
        <Form>
          <LoginWrapper>
            <h2 style={{ textAlign: 'center' }}>Log In</h2>
            <Field label="Email" name="email" type="email" component={Input} />
            <Field type="password" label="Password" name="password" component={Input} />
            <Button center htmlType="submit">
              Log in
            </Button>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              Don't have an account? <Link to="/register">Create an account</Link>
            </p>
          </LoginWrapper>
        </Form>
      </Formik>
    </>
  );
};
