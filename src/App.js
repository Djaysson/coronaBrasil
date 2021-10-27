import React from "react";
import "../src/global.css";
import Header from "./components/header/Header";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Routes /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
