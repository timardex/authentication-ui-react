import React, { useState } from 'react';

import useForm from '../../../hooks/authUseForm';
import { validationSchema } from '../../../hooks/validationSchema';

import FormGroup from '../../molecules/FormGroup';
import Button from '../../molecules/Button';
import Icon from '../../molecules/Icon';

import './style.scss';

interface Props {
  setPage: Function;
}

const Register: React.FC<Props> = (props: Props) => {
  const { setPage } = props;
  const stateSchema: Object = {
    firstName: {
      value: '',
      error: '',
    },
    lastName: {
      value: '',
      error: '',
    },
    postCode: {
      value: '',
      error: '',
    },
    dobDay: {
      value: '',
      error: '',
    },
    dobMonth: {
      value: '',
      error: '',
    },
    dobYear: {
      value: '',
      error: '',
    },
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

  const { firstName, lastName, postCode, dobDay, dobMonth, dobYear, email, password } = values;

  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [acceptTandC, setAcceptTandC] = useState<any>();

  return (
    <div id="register">
      <div className="auth-form">
        <form autoComplete="off" onSubmit={handleOnSubmit}>
          <div className="group">
            <Icon type="user" size="tiny" className="input-icon" />
            <FormGroup
              inputValue={firstName}
              type={'text'}
              name={'firstName'}
              placeholder={'First name'}
              handleOnChange={handleOnChange}
            />
            {errors.firstName && dirty.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className="group">
            <Icon type="user" size="tiny" className="input-icon" />
            <FormGroup
              inputValue={lastName}
              type={'text'}
              name={'lastName'}
              placeholder={'Last name'}
              handleOnChange={handleOnChange}
            />
            {errors.lastName && dirty.lastName && <span className="error">{errors.lastName}</span>}
          </div>
          <div className="group">
            <Icon type="mailbox" size="tiny" className="input-icon" />
            <FormGroup
              inputValue={postCode}
              type={'text'}
              name={'postCode'}
              placeholder={'Postcode'}
              handleOnChange={handleOnChange}
            />
            {errors.postCode && dirty.postCode && <span className="error">{errors.postCode}</span>}
            <Icon type="exclamation" size="small" />
            <div className="information-box">
              Postcode
              <span>
                We need to know where you are located so we can tailor content and advertising to
                your area - you can make choices about how we use your data at any point in your app
                settings page.
              </span>
            </div>
          </div>
          <div className="date-of-birth group">
            <Icon type="calendar" size="tiny" className="input-icon" />
            <div className="input-container">
              <div>
                <FormGroup
                  inputValue={dobDay}
                  type={'number'}
                  name={'dobDay'}
                  placeholder={'DD'}
                  handleOnChange={handleOnChange}
                />
                {errors.dobDay && dirty.dobDay && <span className="error">{errors.dobDay}</span>}
              </div>
              <div>
                <FormGroup
                  inputValue={dobMonth}
                  type={'number'}
                  name={'dobMonth'}
                  placeholder={'MM'}
                  handleOnChange={handleOnChange}
                />
                {errors.dobMonth && dirty.dobMonth && <span className="error">{errors.dobMonth}</span>}
              </div>
              <div>
                <FormGroup
                  inputValue={dobYear}
                  type={'number'}
                  name={'dobYear'}
                  placeholder={'YY'}
                  handleOnChange={handleOnChange}
                />
                {errors.dobYear && dirty.dobYear && <span className="error">{errors.dobYear}</span>}
              </div>
            </div>
            <Icon type="exclamation" size="small" />
            <div className="information-box">
              Date of birth
              <span>
                We will use this to allow us to only serve age-appropriate content and remove the
                necessity to ask you every time you play age-restricted content.
              </span>
            </div>
          </div>
          <div className="group">
            <Icon type="email" size="tiny" className="input-icon" />
            <FormGroup inputValue={email} type={'email'} name={'email'} placeholder={'Email address'} handleOnChange={handleOnChange} />
            {errors.email && dirty.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="auth-password group">
            <Icon type="lock" size="tiny" className="input-icon" />
            <FormGroup
              inputValue={password}
              type={passwordShown ? 'text' : 'password'}
              name={'password'}
              placeholder={'Password'}
              handleOnChange={handleOnChange}
            />
            {errors.password && dirty.password && <span className="error">{errors.password}</span>}
            <div onClick={() => setPasswordShown(!passwordShown)}>
              <Icon type="eye" size="small" />
            </div>
          </div>

          <div className="accept-t-and-c text-center">
            <label>
              <span className={`checkmark ${acceptTandC ? 'active' : ''}`}></span>
              <span className="confirmation-text">
                I confirm I have read and accept the
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </span>
              <input type="checkbox" value={acceptTandC} onChange={() => setAcceptTandC(!acceptTandC)} />
            </label>
          </div>
          <Button
            buttonType="primary"
            buttonText="Create account"
            buttonFor="submit"
            buttonDisabled={acceptTandC && !disable ? false : true}
          />
        </form>
      </div>
      <div className="component-footer text-center">
        <p>
          Have an account already?
          <span className="component-change" onClick={() => setPage(0)}>
            Sign-in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;