import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import api from "../../server/apiCovidEstados";

import Img from "../../images/Person.svg";

import "./styles.css";
const StatusCasos = () => {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    api.get("/report/v1").then((response) => {
      const datas = response.data;
      setDataTable(datas.data);
    });
  }, []);

  return (
    <div className="casesContainer">
      <section className="casesSection">
        <Banner bannerImg={Img} desc="Person lying in bed with covid-19" />
        <div className="casestable">
          <h1>Casos de covid-19 no Brasil por UF</h1>
          <table className="table">
            <thead className="tableHeader">
              <tr>
                <td>
                  <span role="img" aria-label="alert">
                    📍
                  </span>
                  Estados
                </td>
                <td>
                  <span role="img" aria-label="alert">
                    🚨
                  </span>
                  Confirmados
                </td>
                <td>
                  <span role="img" aria-label="death">
                    💀
                  </span>
                  Mortes
                </td>
              </tr>
            </thead>
            {dataTable.map((dataTables) => (
              <tbody className="tableBody" key={dataTables.uid}>
                <tr>
                  <td>{dataTables.uf}</td>
                  <td>{dataTables.cases}</td>
                  <td>{dataTables.deaths}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};

export default StatusCasos;
