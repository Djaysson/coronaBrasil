import React from "react";
import ImgLogo from "../../images/logo.png";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <h2>Desenvolvido por Djayson Rodrigues - </h2>
        <img src={ImgLogo} alt="logo" />
      </footer>
    </div>
  );
}
export default Footer;
