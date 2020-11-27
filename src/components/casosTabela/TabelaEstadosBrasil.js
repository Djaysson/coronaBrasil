import React, { useEffect, useState } from 'react';
import StatusBrasil from '../statusBrasil/StatusBrasil';
import StatusCeara from '../statusCeara/StatusCeara';
import api from '../../server/api';
import './styles.css';
function TabelaEstadosBrasil() {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    api.get("api/report/v1").then(response => {
      const dados = response.data;
      setDataTable(dados.data);

    })

  }, []);

  return (
    <div className="container_table">
      <div className="components">
        <StatusBrasil />
        <StatusCeara />
      </div>
      <h2>Status Brasil por UF</h2>
      <table>
        <thead>
          <tr>
            <td> <span role="img" aria-label="alert">📍</span>Estados</td>
            <td><span role="img" aria-label="alert">🚨</span>Confirmados</td>
            <td> <span role="img" aria-label="death">💀</span>Mortes</td>
          </tr>
        </thead>
        {dataTable.map((dataTables) => (
          <tbody key={dataTables.uid}>
            <tr>
              <td>{dataTables.uf}</td>
              <td>{dataTables.cases}</td>
              <td>{dataTables.deaths}</td>
            </tr>

          </tbody>
        ))}
      </table>
    </div>
  );
}

export default TabelaEstadosBrasil;
