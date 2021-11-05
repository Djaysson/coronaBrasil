import React, { useEffect, useState } from "react";
import api from "../../server/apiCovidEstados";
import "./styles.css";

function StatusCeara() {
  const [statusC, setStatusC] = useState([]);
  useEffect(() => {
    api.get("/api/report/v1/brazil/uf/ce").then((response) => {
      const dados = response.data;
      setStatusC(dados);
    });
  }, []);

  function formatNumber(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

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

  return (
    <div className="container_statusCeara">
      <h2>Status Ceara</h2>
      <table>
        <thead>
          <tr>
            <td>
              <span role="img" aria-label="check">
                ✅
              </span>{" "}
              {statusC.cases} Confirmados
            </td>
          </tr>

          <tr>
            <td>
              <span role="img" aria-label="death">
                💀
              </span>{" "}
              {statusC.deaths} Mortes
            </td>
          </tr>
        </thead>

        <tbody className="status_update">
          <tr>
            <td>
              <span role="img" aria-label="time">
                🕐
              </span>
              Atualizado: {formatDate(statusC.datetime)}
            </td>
          </tr>
          <tr>
            <td>
              <span role="img" aria-label="chart">
                📊
              </span>
              Fonte: WHO
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatusCeara;
