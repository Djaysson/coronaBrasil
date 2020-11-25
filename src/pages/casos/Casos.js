import React from 'react';
import TabelaEstadosBrasil from '../../components/casosTabela/TabelaEstadosBrasil';
import backgroundImg from '../../images/background.png';
import './styles.css';
const Casos = () => {
  return (
    <div className="container_casos">
      <img src={backgroundImg} alt="Plano de fundo" />
      <TabelaEstadosBrasil />
    </div>
  );
}

export default Casos;