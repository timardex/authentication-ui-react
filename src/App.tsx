import React from 'react';
import Header from './components/templates/Header';
import Authentication from './components/templates/Authentication';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <Authentication />
    </div>
  );
}

export default App;
