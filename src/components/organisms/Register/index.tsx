import React, { useState } from 'react';

import useForm from '../../../helpers/authUseForm';
import { validationSchema } from '../../../helpers/validationSchema';

import FormGroup from '../../molecules/FormGroup';
import Button from '../../molecules/Button';
import Icon from '../../molecules/Icon';
import ComponentChanger from '../../molecules/ComponentChanger';
import InfoBox from '../../molecules/InfoBox';

import { stateSchema } from './stateSchema';
import './style.scss';

interface Props {
  setPage: Function;
  scrollToTop: Function;
  setPasswordShown: Function;
  passwordShown: boolean;
}

const Register: React.FC<Props> = (props: Props) => {
  const { setPage, scrollToTop, setPasswordShown, passwordShown } = props;
  const [acceptTandC, setAcceptTandC] = useState<any>();

  const onSubmitForm = (state: any): void => {
    alert(JSON.stringify(state))
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationSchema,
    onSubmitForm
  );

  const { firstName, lastName, postCode, dobDay, dobMonth, dobYear, email, password } = values;

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

            <InfoBox title="Postcode" text="Information here" />
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
            <InfoBox title="Date of birth" text="Information here" />
          </div>
          <div className="group">
            <Icon type="email" size="tiny" className="input-icon" />
            <FormGroup
              inputValue={email}
              type={'email'}
              name={'email'}
              placeholder={'Email address'}
              handleOnChange={handleOnChange} />
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

            <Icon type="eye" size="small" className={passwordShown ? 'line-through' : ''} onClick={() => setPasswordShown()} />

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
      <ComponentChanger
        text={`Have an account already?`}
        btnText={`Sign-in`}
        onClick={() => { setPage(0); scrollToTop() }}
        className="text-center" />
    </div>
  );
}

export default Register;