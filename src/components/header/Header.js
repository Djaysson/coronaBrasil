import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import LogoImg from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="container">
      <img src={LogoImg} alt="logo" />

      <div className="navMobile">
        <button onClick={handleOpenMenu}>
          {openMenu !== true ? (
            <MdMenu size={40} color="#EFF3F4" />
          ) : (
            <MdClose size={40} color="#EFF3F4" />
          )}
        </button>
      </div>
      <nav id="navContainer" className={openMenu !== true ? "" : "open"}>
        <ul>
          <li onClick={handleOpenMenu}>
            <NavLink to="/" exact activeStyle={{ color: "#7DB86B" }}>
              Home
            </NavLink>
          </li>
          <li onClick={handleOpenMenu}>
            <NavLink to="/Tests" activeStyle={{ color: "#7DB86B" }}>
              Status Casos
            </NavLink>
          </li>
          <li onClick={handleOpenMenu}>
            <NavLink to="/Tips" activeStyle={{ color: "#7DB86B" }}>
              Status vacinação
            </NavLink>
          </li>
          <li onClick={handleOpenMenu}>
            <NavLink to="/Plato" activeStyle={{ color: "#7DB86B" }}>
              Dicas
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
