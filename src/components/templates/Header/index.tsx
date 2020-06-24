import React from 'react';
import Icon from '../../molecules/Icon';

import './style.scss';

interface Props {
  showAuth: Function;
}

const Header: React.FC<Props> = (props: Props) => {
  const { showAuth } = props;
  return (
    <header id="header" className="pd-1">
      <section className="col-md">
        <div className="sign-up" onClick={() => showAuth(true)}>
          <span>Sign up</span> <Icon type="user" size="small" />
        </div>
      </section>
    </header>
  );
}

export default Header;