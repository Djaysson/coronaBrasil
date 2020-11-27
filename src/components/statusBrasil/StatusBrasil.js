import React, { useEffect, useState } from 'react';
import api from '../../server/api';
import './styles.css';

function StatusBrasil() {

  const [statusB, setStatusB] = useState([]);

  useEffect(() => {
    api.get("/api/report/v1/brazil").then(response => {
      const dados = response.data;
      setStatusB(dados.data);

    })

  }, []);

  function formatNumber(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  function formatDate(date) {
    const d = new Date(date);
    const day = `${formatNumber(d.getDate())}/${formatNumber(d.getMonth() + 1)}/${d.getFullYear()}`;
    const hour = `${formatNumber(d.getHours())}:${formatNumber(d.getMinutes())}`;
    return `${day} - ${hour}`;
  }

  return (
    <div className="container_statusBrasil">
      <h2>Status Brasil</h2>
      <table>

        <thead>
          <tr>
            <td><span role="img" aria-label="check">✅</span> {statusB.confirmed} Confirmados</td>
          </tr>

          <tr>
            <td><span role="img" aria-label="recovery">♻️</span> {statusB.recovered} Recuperados</td>
          </tr>
          <tr>
            <td><span role="img" aria-label="death">💀</span> {statusB.deaths} Mortes</td>
          </tr>
        </thead>

        <tbody className="status_update_at">
          <tr>
            <td><span role="img" aria-label="time">🕐</span>Atualizado: {formatDate(statusB.updated_at)}</td>
          </tr>
          <tr>
            <td><span role="img" aria-label="chart">📊</span>Fonte:  WHO</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default StatusBrasil;