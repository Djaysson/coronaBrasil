import React from "react";
import "./styles.css";

function InforDicas() {
  return (
    <div className="container_inforDicas">
      <h2>Dicas</h2>
      <div className="info">
        <main className="infor_main">
          <div className="inforD">
            <img
              src=""
              alt="como lidar com o estresse durante a pandemia do novo coronavirus"
            />

            <a
              href="https://www.paho.org/sites/default/files/2020-05/thumbnail-lidando-estresse-covid19-criancas.png"
              target="_blank"
            >
              Como lidar com o estresse durante a pandemia do novo coronavirus
            </a>
          </div>
          <div className="inforD">
            <img
              src=""
              alt="Formas de ajudar as pessoas idosas e/ou com doenças pré-existentes que vivem sozinhas"
            />

            <a
              href="https://www.paho.org/sites/default/files/2020-04/thumbnail-living-alone-port.png"
              target="_blank"
            >
              Formas de ajudar as pessoas idosas e/ou com doenças pré-existentes
              que vivem sozinhas
            </a>
          </div>
          <div className="inforD">
            <img
              src=""
              alt="Formas de se preparar e se proteger indivíduos com 60 anos ou mais e/ou pessoas que apresentam doenças pré-existentes"
            />

            <a
              href="https://www.paho.org/sites/default/files/2020-04/thumbnail-preexisting-port.png"
              target="_blank"
            >
              Formas de se preparar e se proteger indivíduos com 60 anos ou mais
              e/ou pessoas que apresentam doenças pré-existentes
            </a>
          </div>
          <div className="inforD">
            <img
              src=""
              alt="F Formas de ajudar as pessoas idosas e/ou com doenças pré-existentes que vivem com você"
            />

            <a
              href="https://www.paho.org/sites/default/files/2020-04/thumbnail-live-with-you-port.png"
              target="_blank"
            >
              Formas de ajudar as pessoas idosas e/ou com doenças pré-existentes
              que vivem com você
            </a>
          </div>
          <div className="inforD">
            <img src="" alt="Dicas para os jovens" />

            <a
              href="https://www.paho.org/sites/default/files/2020-04/screen_shot_2020-04-29_at_8.10.56_am.png"
              target="_blank"
            >
              Dicas para os jovens
            </a>
          </div>
          <div className="inforD">
            <img
              src=""
              alt="Ajudando as crianças a lidar com o estresse durante a pandemia do novo coronavirus"
            />

            <a
              href="https://www.paho.org/sites/default/files/2020-05/thumnail-lidando-estresse-covid19-adultos.jpg"
              target="_blank"
            >
              Ajudando as crianças a lidar com o estresse durante a pandemia do
              novo coronavirus
            </a>
          </div>
        </main>
        <img src="" alt="medico" />
      </div>
      <p>
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
          target="_blank"
        >
          Fonte site da OMS
        </a>
      </p>
    </div>
  );
}

export default InforDicas;
