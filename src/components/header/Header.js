import './styles.css';
import LogoImg from '../../images/logo.svg';

function header() {
  return (
    <div className="container">
      <header>
        <img src={LogoImg} alt="logo" />
        <nav>
          <a href="">Casos</a>
          <a href="">Testes</a>
          <a href="">Dicas</a>
          <a href="">Plantão Coronavirus</a>
        </nav>
      </header>
    </div>
  );
}

export default header;