import React, { useEffect, useState } from "react";

import Banner from "../../components/banner/Banner";
import "./styles.css";
import Img from "../../images/Vaccine.svg";
import ImgBrasil from "../../images/mapBrasil.svg";
import api from "../../server/apiCovidVacina";

const StatusVacina = () => {
  const [vaccineData, setVaccineData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/vaccines?country=Brazil");
      const data = response.data.All;
      setVaccineData(data);
    };

    fetchData();
  }, []);

  function formatNumber(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  /////date and time formatting////////
  function formatDate(date) {
    const d = new Date(date);
    const day = `${formatNumber(d.getDate())}/${formatNumber(
      d.getMonth() + 1
    )}/${d.getFullYear()}`;
    const hour = `${formatNumber(d.getHours())}:${formatNumber(
      d.getMinutes()
    )}`;
    return `${day} - ${hour}`;
  }

  //////////////////////////////////

  return (
    <div className="vaccineContainer">
      <section id="vaccineSection">
        <Banner bannerImg={Img} desc="Person lying in bed with covid-19" />
        <div className="vaccineContent">
          <h1>Pessoas vacinadas no Brasil</h1>
          <div className="content">
            <img src={ImgBrasil} alt="Brazil's map" />

            <ul className="data">
              <li>
                <div>
                  <span>{vaccineData.people_vaccinated}</span>
                </div>
                <strong>Pessoas vacinadas no Brasil</strong>
              </li>
              <li>
                <div>
                  <span>{vaccineData.people_partially_vaccinated}</span>
                </div>
                <strong>Pessoas parcialmente vacinadas no Brasil</strong>
              </li>
              <li>
                <div>
                  <span>{formatDate(vaccineData.updated)}</span>
                </div>
                <strong>Data de atualização de dados</strong>
              </li>
              <li>
                <p>fonte: Ows world</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusVacina;
