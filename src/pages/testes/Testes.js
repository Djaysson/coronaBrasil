import React from 'react';
import { Link } from "react-router-dom";

import oldDoctorImg from '../../images/oldDoctor.png';
import patientDoctorImg from '../../images/patientDoctor.png';

import './styles.css';

const Tests = () => {
  return (
    <div className="container_testes">
      <div className="container_infor">

        <div className="infor">
          <img src={patientDoctorImg} alt="Medica com o paciente" />
          <h2>Informações de  teste rapido de anticorpos para covid-19 nas farmácias</h2>
          <ul>
            <li>Necessário fazer agendamento</li>
            <li>Não  requer pedido medico</li>
            <li>Testes para todos os pacientes</li>
            <li>Valores aproximadamente entre R$120 e R$460</li>
          </ul>
        </div>

        <div className="infor_public">
          <img src={oldDoctorImg} alt="Medico" />
          <h2>Informações de teste rapido de anticorpos para covid-19 em locais publico</h2>
          <ul>
            <li>Centros de Testagem, localizados na Praça do Ferreira</li>
            <li>Hospital Geral de Fortaleza (HGF)</li>
            <li>Shopping RioMar Kennedy</li>
            <li>Os locais de testagens possuem protocolos de atendimento diferentes.
            Qualquer pessoa,pode ter acesso ao exame, com o documento indentificação com foto. Horario de funcionamento
            de 8 às 16 horas.</li>
          </ul>
        </div>
      </div>

      <h2>Mapa de Testes de covid-19 disponiveis nas farmácias</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63698.71632241925!2d-38.584796006781296!3d-3.7732119959636576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stestes%20covid!5e0!3m2!1spt-BR!2sbr!4v1605748132739!5m2!1spt-BR!2sbr"
        width="95%"
        height="450"
        frameborder="0"
        aria-hidden="false"
        tabindex="0">
      </iframe>


      <button><Link to="/Plato">PLANTÃO CORONAVIRUS</Link></button>


    </div>
  );
}

export default Tests;