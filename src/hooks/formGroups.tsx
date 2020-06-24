import React from 'react';

interface Props {
  inputValue: any;
  type: string;
  name: string;
  placeholder?: string;
  handleOnChange: any;
}

export const FormGroups: React.FC<Props> = (props: Props) => {
  const { inputValue, type, name, placeholder, handleOnChange } = props;
  return (
    <input
      className="form-input"
      placeholder={placeholder}
      type={type}
      id={name}
      name={name}
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};
