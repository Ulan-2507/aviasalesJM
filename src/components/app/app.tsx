import React from "react";
import logo from "./logo.svg";
import "./app.scss";

import SideBar from "../side-bar";
import Tickets from "../tickets";

const App:React.FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <main className="main">
        <SideBar />
        <Tickets />
      </main>
    </div>
  );
}

export default App;
