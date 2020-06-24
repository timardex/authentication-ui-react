import React from 'react';
import useForm from '../../../hooks/authUseForm';
import { validationSchema } from '../../../hooks/validationSchema';

import FormGroup from '../../molecules/FormGroup';
import Button from '../../molecules/Button';
import Icon from '../../molecules/Icon';

import './style.scss';

interface Props {
  setPage: Function;
}

const Login: React.FC<Props> = (props: Props) => {
  const { setPage } = props;
  const stateSchema: Object = {
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: '',
    },
  };

  const onSubmitForm = (state: any): void => {
    alert(JSON.stringify(state))
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationSchema,
    onSubmitForm
  );

  const { email, password } = values;

  return (
    <div id="login">
      <div className="auth-form">
        <form autoComplete="off" onSubmit={handleOnSubmit}>
          <div className="group">
            <Icon type="email" size="tiny" className="input-icon" />
            <FormGroup inputValue={email} type={'email'} name={'email'} placeholder="Email address" handleOnChange={handleOnChange} />
            {errors.email && dirty.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="group">
            <Icon type="lock" size="tiny" className="input-icon" />
            <FormGroup
              inputValue={password}
              type={'password'}
              name={'password'}
              placeholder="Password"
              handleOnChange={handleOnChange}
            />
            {errors.password && dirty.password && <span className="error">{errors.password}</span>}
          </div>

          <p className="component-change text-right" onClick={() => setPage(2)}>
            Forgotten password
          </p>

          <Button buttonType="primary" buttonText="Sign in" buttonFor="submit" buttonDisabled={disable} />

        </form>
      </div>
      <div className="component-footer text-center">
        <p>
          Want to create a new account?
          <span className="component-change" onClick={() => setPage(1)}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;