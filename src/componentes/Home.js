import '../componentes/Home.css';
import fotoPerfil from '../assents/FotoPerfil.png';

const Home = () => {

  return (
    <div id="container">
      <div className="containerOne">
        <div className="divImg">
          <img
            src={fotoPerfil}
            alt="fotoPerfil"
            width="150"
            className="imgPerfil"
          />
          <div className="titleTop">
            <p className="titleTopText">Saul Vargas</p>
            <p className="titleTopTextDev">Desenvolvedor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;