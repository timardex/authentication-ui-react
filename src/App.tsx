import React, { useState, useEffect } from 'react';
import Header from './components/templates/Header';
import Authentication from './components/templates/Authentication';

const App: React.FC<{}> = () => {
  const [toggleAuth, setToggleAuth] = useState<boolean>(false);

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    toggleAuth ? (html.style.overflowY = 'hidden') : (html.style.overflowY = 'auto');
  })

  return (
    <div className="App">
      <Header showAuth={setToggleAuth} />
      {toggleAuth && <Authentication hideAuth={setToggleAuth} />}
    </div>
  );
}

export default App;
