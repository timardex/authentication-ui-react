import React from 'react';
import useForm from '../../../hooks/authUseForm';
import { FormGroups } from '../../../hooks/formGroups';
import { validationSchema } from '../../../hooks/validationSchema';
import Button from '../../molecules/Button';
import { Icon } from '../../molecules/Icon';

import './ForgotPassword.scss';

interface Props {
  setPage: Function;
}

const ForgotPassword: React.FC<Props> = (props: Props) => {
  const { setPage } = props;
  const stateSchema: Object = {
    email: {
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

  const { email } = values;

  return (
    <div id="forgot-password">
      <div className="link">
        <span onClick={() => setPage(0)}><Icon type="chevron" size="tiny" /> Forgotten password</span>
      </div>
      <div className="auth-form">
        <form autoComplete="off" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <FormGroups inputValue={email} type={'email'} name={'email'} handleOnChange={handleOnChange} />
            {errors.email && dirty.email && <span className="error">{errors.email}</span>}
          </div>

          <Button
            buttonType="primary"
            buttonText="Send details"
            buttonFor="submit"
            buttonDisabled={disable}
          />
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;