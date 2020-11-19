import React from 'react';
import DoctorImg from '../../images/doctor.png';

import './styles.css';

const Plantao = () => {
  return (
    <div className="container_plantao">
      <h1>O QUE É O PLANTÃO CORONAVIRUS</h1>
      <p>É um canal de comunicação lançada pelo o governo do Ceara,
      que por via whatsapp e também disponível no site
      coronavirus.ceara.gov.br proporciona atendimentos os cidadãos
      e cidadãs durante a pandemia do novo coronavirus. A população pode,
      pelo celular, fazer a auto avaliação do seu estado de saúde e receber
      orientações de uma equipe médica de plantão.
      </p>
      <p>O atendimento via whatsapp funciona como qualquer conversa de whatsapp,
      basta mandar um “oi” para receber orientações e ser atendido por uma
      equipe de saúde do governo.
      </p>
      <button><a
        target="_blank"
        href={'https://api.whatsapp.com/send?phone=5585984390647&text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20novo%20coronavirus.'}>Whatsapp plantão coronavirus</a></button>
      <p>O atendimento via site funciona utilizando a tecnologia de chatbot,
      em que o usuário mantém  um bate-papo que por sua vez será feita uma
      triagem a partir dos sintomas informado pelo o usuário que, em seguida,
      poderá  ser encaminhado  para  um atendimento mais aprofundado, na mesma
      plataforma.
      </p>
      <button><a target="_blank" href="https://coronavirus.ceara.gov.br/">Site do plantão coronavirus</a></button>
      <img src={DoctorImg} alt="doctor" />
    </div>
  );
}

export default Plantao;