import React, { useState, createRef } from 'react';
import Login from '../../organisms/Login';
import Register from '../../organisms/Register';
import ForgotPassword from '../../organisms/ForgotPassword';
import Icon from '../../molecules/Icon';

import './style.scss';

interface Props {
  hideAuth: Function;
}

const Authentication: React.FC<Props> = (props: Props) => {
  const { hideAuth } = props;
  const [page, setPage] = useState<number>(0);
  const headerRef = createRef<HTMLDivElement>();

  const scrollToTop = (ref: any): void => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const authPages = [
    {
      title: 'Login',
      component: <Login setPage={setPage} scrollToTop={() => scrollToTop(headerRef)} />
    },
    {
      title: 'Register',
      component: <Register setPage={setPage} scrollToTop={() => scrollToTop(headerRef)} />
    },
  ]

  const getPage = authPages[page] ? (authPages[page].component) : (<ForgotPassword setPage={setPage} />);

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
          <div className="auth-header" ref={headerRef}>
            <div className="close-dialog">
              <Icon type="close" size="small" onClick={() => hideAuth(false)} />
            </div>
            <ul>
              {authPages.map(
                (props: any, i: number) =>
                  page !== 2 && (
                    <li
                      className={`link ${i === page ? 'active' : ''}`}
                      key={i}
                    >
                      <span onClick={() => setPage(i)}>{props ? props.title : undefined}</span>
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