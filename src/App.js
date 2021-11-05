import React from "react";
import "../src/global.css";
import Header from "./components/header/Header";
import Routes from "./routes";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
