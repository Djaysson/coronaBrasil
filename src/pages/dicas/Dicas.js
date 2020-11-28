import React from 'react';
import './styles.css';
import DoctorGirlImg from '../../images/doctorGirl.png';
import CleanHandslImg from '../../images/clean-hands.svg';
import DoctorImg from '../../images/doctor.svg';
import FluMaskImg from '../../images/flu-mask.svg';
import healthcareImg from '../../images/healthcare.svg';
import NewsImg from '../../images/news.svg';
import SocialDistancingImg from '../../images/social-distancing.svg';


const Dicas = () => {
  return (
    <div className="container_dicas">
      <h2>Medidas de proteção básicas</h2>
      <main>
        <div className="contents">
          <img src={DoctorGirlImg} alt="Medica" />
          <div className="contents_main">
            <div className="internal_content">
              <img src={CleanHandslImg} alt="Medica" />
              <div className="internal_content_main">
                <strong>Lave as mãos com frequência</strong>
                <span>Limpe regular e cuidadosamente as mãos com um produto á base de álcool ou lave-as com água e sabão.</span>
              </div>
            </div>

            <div className="internal_content">
              <img src={SocialDistancingImg} alt="Medica" />
              <div className="internal_content_main">
                <strong>Manter o distanciamento social</strong>
                <span>Mantenha uma distância de pelo menos 1 metro (3 pés) entre você e qualquer pessoa que esteja tossindo ou espirrando.</span>
              </div>
            </div>

            <div className="internal_content">
              <img src={DoctorImg} alt="Medica" />
              <div className="internal_content_main">
                <strong>Evie tocar nos olhos, nariz e boca</strong>
                <span>As mãos tocam muitas superfícies e podem pegar vírus. Uma vez contaminado, as mãos podem transferir o vírus para os olhos, nariz ou boca. A partir daí, o vírus pode entrar em seu corpo e fazer você adoecer.</span>
              </div>
            </div>
            <div className="internal_content">
              <img src={FluMaskImg} alt="Medica" />
              <div className="internal_content_main">
                <strong>Pratique higiene respiratória</strong>
                <span>Certifique-se de que você e as pessoas ao seu redor seguem uma boa higiene respiratória. Isso significa cobrir a boca e o nariz com o cotovelo dobrado ou com um lenço de papel ao tossir ou espirrar. Em seguida, descarte o tecido usado imediatamente.</span>
              </div>
            </div>
            <div className="internal_content">
              <img src={healthcareImg} alt="Medica" />
              <div className="internal_content_main">
                <strong>Se você tiver febre, tosse e dificuldade para respirar, procure atendimento médico o quanto antes</strong>
                <span>Fique em casa se não se sentir bem. Se tiver febre, tosse e dificuldade para respirar, procure atendimento médico e ligue com antecedência. Siga as instruções da autoridade de saúde local.</span>
              </div>
            </div>
            <div className="internal_content">
              <img src={NewsImg} alt="Medica" />
              <div className="internal_content_main">
                <strong>Mantenha-se informado e siga os conselhos dados pelo seu médico</strong>
                <span>Mantenha-se informado sobre os últimos desenvolvimentos sobre o COVID-19. Siga os conselhos dados por seu provedor de saúde, sua autoridade de saúde pública local e nacional ou seu empregador sobre como se proteger e proteger outras pessoas do COVID-19.</span>
              </div>
            </div>

          </div>
        </div>

      </main>
      <p>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">Fonte site da OMS</a>
      </p>

    </div>
  );
}

export default Dicas;