import React from 'react';
import useForm from '../../../hooks/authUseForm';
import { FormGroups } from '../../../hooks/formGroups';
import { validationSchema } from '../../../hooks/validationSchema';
import Button from '../../molecules/Button';

import './Login.scss';

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
    alert(state)
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
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <FormGroups inputValue={email} type={'email'} name={'email'} handleOnChange={handleOnChange} />
            {errors.email && dirty.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <FormGroups
              inputValue={password}
              type={'password'}
              name={'password'}
              handleOnChange={handleOnChange}
            />
            {errors.password && dirty.password && <span className="error">{errors.password}</span>}
          </div>

          <p className="component-change" onClick={() => setPage(2)}>
            Forgotten password
          </p>

          <Button buttonType="primary" buttonText="Sign in" buttonFor="submit" buttonDisabled={disable} />

        </form>
      </div>
      <div className="component-footer">
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