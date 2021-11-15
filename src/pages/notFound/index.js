import React from "react";
import Err404Img from "../../images/err.png";
import { useHistory } from "react-router-dom";
import "./styles.css";

function PageNotFound() {
  let history = useHistory();

  function backButton() {
    history.push("/");
  }

  return (
    <div className="errorContainer">
      <section id="error">
        <img src={Err404Img} alt="Error 404" />
        <h1>Not Found</h1>
        <p>
          Pesquisamos em todas as partes, mas não encontramos a página que você
          está procurando.
        </p>
        <button className="backBtn" onClick={backButton}>
          Voltar para Home
        </button>
      </section>
    </div>
  );
}

export default PageNotFound;
