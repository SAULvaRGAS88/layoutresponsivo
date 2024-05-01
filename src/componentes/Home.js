import '../componentes/Home.css';
import fotoPerfil from '../assents/FotoPerfil.png';
import MenuContato from '../componentes/menuContato/MenuContato'
import { MenuModal } from './menuModal/MenuModal';

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
        <MenuContato/>
        <MenuModal/>
      </div>
    </div>
  );
};

export default Home;