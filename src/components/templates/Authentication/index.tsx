import React, { useState, createRef } from 'react';
import renderLayoutNames from '../../../helpers/renderLayoutNames';

import Login from '../../organisms/Login';
import Register from '../../organisms/Register';
import ForgotPassword from '../../organisms/ForgotPassword';
import Icon from '../../molecules/Icon';

import './style.scss';
import './form.scss';

interface Props {
  hideAuth: Function;
}

const Authentication: React.FC<Props> = (props: Props) => {
  const { hideAuth } = props;
  const [page, setPage] = useState<number>(0);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

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
      component: <Login
        setPage={setPage}
        scrollToTop={() => scrollToTop(headerRef)}
        passwordShown={passwordShown}
        setPasswordShown={() => setPasswordShown(!passwordShown)} />
    },
    {
      title: 'Register',
      component: <Register
        setPage={setPage}
        scrollToTop={() => scrollToTop(headerRef)}
        passwordShown={passwordShown}
        setPasswordShown={() => setPasswordShown(!passwordShown)} />
    },
  ]

  const getPage = authPages[page] ? (authPages[page].component) : (<ForgotPassword setPage={setPage} />);

  return (
    <div id="authentication" className="pd-l pd-r">
      <div className={`container col-sm ${renderLayoutNames(page)}`}>
        <div className="container-box">
          <div className="auth-header" ref={headerRef}>
            <Icon type="close" size="small" className="close-dialog" onClick={() => hideAuth(false)} />
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