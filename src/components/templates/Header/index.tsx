import React from 'react';
import { User } from '../../../assets/icons/User';

import './Header.scss';

const Header: React.FC<{}> = () => {
  return (
    <div id="header" className="pd-1">
      <div className="sign-up"><span>Sign up</span> <User /></div>
    </div>
  );
}

export default Header;