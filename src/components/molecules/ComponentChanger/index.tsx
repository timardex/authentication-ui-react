import React from 'react';
import './style.scss';

export interface Props {
  text?: string,
  btnText: string,
  onClick?: () => any;
  className?: string;
}

const ComponentChanger: React.FC<Props> = (props: Props) => {
  const { text, btnText, onClick, className } = props;
  const classes = ['component-change', className].filter(c => !!c).join(' ');
  return (
    <p className={classes}>
      {text}
      <span onClick={onClick}>{btnText}</span>
    </p>
  );
};

export default ComponentChanger;