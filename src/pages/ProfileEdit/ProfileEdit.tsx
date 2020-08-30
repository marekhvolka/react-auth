import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { Input } from '../../atoms/Input/Input';
import { State } from '../../store/reducer';
import { User } from '../../models/User';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { media } from '../../theme';
import { Button } from '../../atoms/Button/Button';
import { LoadUserAction } from '../../store/actions';
import { FlashMessageType, showFlashMessage } from '../../atoms/FlashMessage/FlashMessage';
import { Select } from '../../atoms/Select/Select';

const FormWrapper = styled.div`
  ${media.nonMobile} {
    width: 500px;
    margin: auto;
  }
`;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, 'Email must have at least 3 characters')
    .max(255)
    .email('This is not a valid email')
    .required('Email is required'),
  password: yup.string().min(3, 'Password is not long enough').max(255).required('Password is required'),
});

export const ProfileEdit = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state: State) => state.userData);

  const onSubmit = (values: User) => {
    setIsLoading(true);
    dispatch({
      ...new LoadUserAction(values),
    });
    setIsLoading(false);
    history.push('/profile');
    showFlashMessage('Profile changed', FlashMessageType.SUCCESS);
  };

  const onCancel = () => {
    history.goBack();
  };

  if (!userData) {
    return <Spinner />;
  }

  return (
    <>
      {isLoading && <Spinner />}
      <Formik validationSchema={validationSchema} initialValues={userData} onSubmit={onSubmit}>
        <Form>
          <FormWrapper>
            <h2 style={{ textAlign: 'center' }}>Edit profile</h2>
            <Field label="First name" name="first_name" component={Input} />
            <Field label="Other names" name="other_names" component={Input} />
            <Field label="Email" name="email" type="email" component={Input} />
            <Field label="Password" name="password" type="password" component={Input} />
            <Field label="Mobile" name="mobile" component={Input} />
            <Field label="Company name" name="company" component={Input} />

            <h2>Address</h2>
            <Field label="Street" name="address.street" component={Input} />
            <Field label="Town" name="address.town" component={Input} />
            <Field label="Postcode" name="address.postcode" component={Input} />
            <Field label="County" name="address.county" component={Input} />
            <Field
              mode="multiple"
              label="Preferences to contact"
              name="preferences.contact"
              component={Select}
              options={[
                { id: 'mail', name: 'Mail' },
                { id: 'sms', name: 'SMS' },
              ]}
            />
            <Button type="primary" htmlType="submit">Save</Button>
            <Button htmlType="button" onClick={onCancel}>Cancel</Button>
          </FormWrapper>
        </Form>
      </Formik>
    </>
  );
};
