import React from 'react';
import './Login.scss';

interface Props {
  setPage: Function;
}

const Login: React.FC<Props> = (props: Props) => {
  const { setPage } = props;
  return (
    <div id="login">
      Login
    </div>
  );
}

export default Login;