import React from 'react';
import logo from './logo.svg';
import './app.scss';

import SideBar from '../side-bar';
import Tikets from '../tikets';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <main className="main">
        <SideBar />
        <Tikets />
      </main>
    </div>
  );
}

export default App;