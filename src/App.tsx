import React, { useState } from 'react';
import Header from './components/templates/Header';
import Authentication from './components/templates/Authentication';

const App: React.FC<{}> = () => {
  const [toggleAuth, setToggleAuth] = useState<boolean>(false);
  return (
    <div className="App">
      <Header showAuth={setToggleAuth} />
      {toggleAuth && <Authentication />}
    </div>
  );
}

export default App;
