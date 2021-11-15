import React, { useEffect, useState } from "react";
import api from "../../server/apiCovidBrasil";
import { useHistory } from "react-router-dom";

import "./styles.css";
import Banner from "../../components/banner/Banner";
import Img from "../../images/Epidemic-1.svg";

function Home() {
  const [statusBrasil, setStatusBrasil] = useState([]);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("countries/Brazil");
      const data = response.data;
      setStatusBrasil(data);
    };

    fetchData();
  }, []);

  function handlingRedirectButton() {
    history.push("/Casos");
  }
  return (
    <div className="homeContainer">
      <section className="SectionContainer">
        <Banner bannerImg={Img} desc="group of people" />
        <main className="mainContent">
          <h1>O que é covid-19</h1>
          <p>
            A Covid-19 é uma infecção respiratória aguda causada pelo
            coronavírus SARS-CoV-2, potencialmente grave, de elevada
            transmissibilidade e de distribuição global. O SARS-CoV-2 é um
            betacoronavírus descoberto em amostras de lavado broncoalveolar
            obtidas de pacientes com pneumonia de causa desconhecida na cidade
            de Wuhan, província de Hubei, China, em dezembro de 2019. Pertence
            ao subgênero Sarbecovírus da família Coronaviridae e é o sétimo
            coronavírus conhecido a infectar seres humanos. Os coronavírus são
            uma grande família de vírus comuns em muitas espécies diferentes de
            animais, incluindo o homem, camelos, gado, gatos e morcegos.
            Raramente os coronavírus de animais podem infectar pessoas e depois
            se espalhar entre seres humanos como já ocorreu com o MERS-CoV e o
            SARS-CoV-2. Até o momento, não foi definido o reservatório silvestre
            do SARS-CoV-2.
          </p>
        </main>
        <div className="statisticsContainer">
          <div className="statistics">
            <strong>{statusBrasil.recovered}</strong>
            <span>Casos Recuperados</span>
          </div>
          <div className="statistics">
            <strong>{statusBrasil.cases}</strong>
            <span>Casos Confirmados</span>
          </div>
          <div className="statistics">
            <strong>{statusBrasil.deaths}</strong>
            <span>Óbitos Confirmados</span>
          </div>
          <button className="button" onClick={handlingRedirectButton}>
            Saiba mais...
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
