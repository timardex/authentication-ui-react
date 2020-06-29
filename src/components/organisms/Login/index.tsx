import React, { useState } from 'react';
import useForm from '../../../helpers/authUseForm';
import { validationSchema } from '../../../helpers/validationSchema';

import FormGroup from '../../molecules/FormGroup';
import Button from '../../molecules/Button';
import Icon from '../../molecules/Icon';
import ComponentChanger from '../../molecules/ComponentChanger';

import './style.scss';

interface Props {
  setPage: Function;
  scrollToTop: Function;
  setPasswordShown: Function;
  passwordShown: boolean;
}

const Login: React.FC<Props> = (props: Props) => {
  const { setPage, scrollToTop, setPasswordShown, passwordShown } = props;
  const [remember, setRemember] = useState<any>(localStorage.getItem('remember') ? true : false);
  const stateSchema: Object = {
    email: {
      value: localStorage.getItem('remember') ? localStorage.getItem('email') : '',
      error: '',
    },
    password: {
      value: localStorage.getItem('remember') ? localStorage.getItem('password') : '',
      error: '',
    },
  };

  const onSubmitForm = (state: any): void => {
    alert(JSON.stringify(state));
    if (remember) {
      localStorage.setItem('remember', remember);
      localStorage.setItem('email', state.email);
      localStorage.setItem('password', state.password);
    } else {
      localStorage.removeItem('remember');
    }
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
            <FormGroup
              inputValue={email}
              type={'email'}
              name={'email'}
              placeholder="Email address"
              handleOnChange={handleOnChange} />

            {errors.email && dirty.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="auth-password group">
            <Icon type="lock" size="tiny" className="input-icon" />
            <FormGroup
              inputValue={password}
              type={passwordShown ? 'text' : 'password'}
              name={'password'}
              placeholder="Password"
              handleOnChange={handleOnChange}
            />
            {errors.password && dirty.password && <span className="error">{errors.password}</span>}
            <Icon type="eye" size="small" className={passwordShown ? 'line-through' : ''} onClick={() => setPasswordShown()} />
          </div>

          <div className="form-footer">
            <div className="remember-me text-center">
              <label>
                <span className={`checkmark ${remember ? 'active' : ''}`}></span>
                <span>
                  Remember me
                </span>
                <input type="checkbox" value={remember} onChange={() => setRemember(!remember)} />
              </label>
            </div>

            <ComponentChanger
              btnText={`Forgotten password`}
              onClick={() => setPage(2)}
              className="text-right" />
          </div>

          <Button
            buttonType="primary"
            buttonText="Sign in"
            buttonFor="submit"
            buttonDisabled={localStorage.getItem('remember') ? '' : disable} />

        </form>
      </div>
      <ComponentChanger
        text={`Want to create a new account?`}
        btnText={`Register`}
        onClick={() => { setPage(1); scrollToTop() }}
        className="text-center" />
    </div>
  );
}

export default Login;