import React from 'react';
import Header from './templates/Header';
import Authentication from './templates/Authentication';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <Authentication />
    </div>
  );
}

export default App;
