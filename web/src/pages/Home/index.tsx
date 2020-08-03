import React from 'react';
import {Link} from 'react-router-dom';

import './style.css'
import Logo from '../../assets/logo.svg'
import Landing from '../../assets/landing.svg'
import StudyIcon from '../../assets/icons/study.svg'
import GiveClassesIcon from '../../assets/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/icons/purple-heart.svg'

const Home: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

          <img 
            src={Landing} 
            alt="" 
            className="hero-image"
          />

          <div className="buttons-container">
            <Link to="/List" className="study">
              <img src={StudyIcon}  alt="study"/>
              Estudar
            </Link>

            <Link to="/" className="give-classes">
              <img src={GiveClassesIcon}  alt="study"/>
              Dar Aulas
            </Link>
          </div>

          <span className="total-conections">
            Total de 200 conexões realizadas {" "}
            <img src={PurpleHeartIcon} alt=""/>
          </span>

        </div>
    </div>
    );
}

export default Home;