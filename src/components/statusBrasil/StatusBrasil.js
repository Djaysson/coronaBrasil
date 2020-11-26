import React from 'react';
import './styles.css';

const StatusBrasil = () => {
  return (
    <div className="container_statusBrasil">
      <h2>Status Brasil</h2>
      <table>
        <thead>
          <tr>
            <td><span role="img" aria-label="check">✅</span>Confirmados</td>
          </tr>
          <tr>
            <td> <span role="img" aria-label="alert">🚨</span>Ativos</td>
          </tr>
          <tr>
            <td><span role="img" aria-label="recovery">♻️</span>Recuperados</td>
          </tr>
          <tr>
            <td><span role="img" aria-label="death">💀</span>Mortes</td>
          </tr>
        </thead>
        <hr />
        <tbody >
          <tr>
            <td><span role="img" aria-label="time">🕐</span>Atualizado:</td>
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