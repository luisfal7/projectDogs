import {Link} from "react-router-dom";
import photoLanding from '../../assets/photo-landing.png'
import logo from '../../assets/logo.png'
import moduleLanding from './Landing.module.css'

function Landing() {

  return (
    <div className={moduleLanding.container}>
      <div className={moduleLanding.containerMenu}>
        <div className={moduleLanding.logo}>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className={moduleLanding.containerCover}>
        <div className={moduleLanding.cover}>
          <div  className={moduleLanding.text}>
            <h1>ENCONTRARÁS INFORMACIÓN DE TUS RAZAS DE PERROS FAVORITAS</h1>

            <p>“Todos los hombres son dioses para su perro. Por eso hay gente que ama más a sus perros que a los hombres”. Aldous Huxley.</p>
            <p>“Todo el conocimiento, la totalidad de preguntas y respuestas se encuentran en el perro”. Franz Kafka.</p>
            <p>“El perro sabe, pero no sabe que sabe”. Pierre Teilhard de Chardin.</p>
            <p>“Dime como eres con los animales y te diré qué tipo de persona eres.” J. Manuel Serrano Márquez.</p>
            <p>“Amo a los perros porque nunca le hacen sentir a uno que los haya tratado mal”. Otto von Bismark.</p>
              <Link to="/home"> 
                <button className={moduleLanding.cta}>
                  <span>Ingresar</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button> 
              </Link>
          </div>
          <div className={moduleLanding.img}>
            <img src={photoLanding} alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
