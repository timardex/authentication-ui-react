import React from 'react';
import './style.scss';

export interface Props {
  buttonText: string;
  buttonType?: string;
  buttonFor?: any;
  buttonDisabled?: boolean;
}

const Button: React.FC<Props> = (props: Props) => {
  const { buttonText, buttonType = "", buttonFor, buttonDisabled = false } = props;
  return (
    <button
      className={buttonType}
      type={buttonFor}
      disabled={buttonDisabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;