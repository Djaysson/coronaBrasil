import React from 'react';
import '../src/global.css';
import Header from './components/header/Header';
import Routes from './Routes';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
