import React, { useState } from 'react';
import Login from '../../organisms/Login';
import Register from '../../organisms/Register';
import ForgotPassword from '../../organisms/ForgotPassword';
import { Close } from '../../../assets/icons/Close';

import './Authentication.scss';

interface Props {
  hideAuth: Function;
}

const Authentication: React.FC<Props> = (props: Props) => {
  const { hideAuth } = props;
  const [page, setPage] = useState<number>(0);

  const authPages = [
    {
      title: 'Login',
      component: <Login setPage={setPage} />
    },
    {
      title: 'Register',
      component: <Register setPage={setPage} />
    },
  ]

  const getPage = authPages[page] ? (authPages[page].component) : (<ForgotPassword />);

  const renderPageNames = (): string => {
    switch (page) {
      case 0:
        return 'page-sign-in';
      case 1:
        return 'page-register';
      case 2:
        return 'page-forgot-password';
      default:
        return '';
    }
  };

  return (
    <div id="authentication" className="pd-l pd-r">
      <div className={`container col-sm ${renderPageNames()}`}>
        <div className="container-box">
          <div className="auth-header">
            <div className="close-dialog" onClick={() => hideAuth(false)}>
              <Close />
            </div>
            <ul>
              {authPages.map(
                (props: any, i: number) =>
                  page !== 2 && (
                    <li
                      className={`link ${i === page ? 'active' : ''}`}
                      key={i}
                      onClick={() => setPage(i)}
                    >
                      <span>{props ? props.title : undefined}</span>
                    </li>
                  )
              )}
            </ul>
          </div>

          <div className="auth-main">{getPage}</div>

          {page !== 2 && (
            <div className="auth-footer">
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Privacy & Cookies</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authentication;