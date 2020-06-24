import React from 'react';
import './style.scss';

interface Props {
  inputValue: any;
  type: string;
  name: string;
  placeholder?: string;
  handleOnChange: any;
}

const FormGroup: React.FC<Props> = (props: Props) => {
  const { inputValue, type, name, placeholder, handleOnChange } = props;
  return (
    <div className="form-group">
      <input
        className="form-field"
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={inputValue}
        onChange={handleOnChange}
      />
      <label className="form-label" htmlFor={name}>{placeholder}</label>
    </div>
  );
};

export default FormGroup