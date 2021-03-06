import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

import './style.css'
import Logo from '../../assets/logo.svg'
import Landing from '../../assets/landing.svg'
import StudyIcon from '../../assets/icons/study.svg'
import GiveClassesIcon from '../../assets/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/icons/purple-heart.svg'
import api from '../../services/api';

const Home: React.FC = () => {
  const [connections,setConnections] =useState(0);


useEffect(() => {
  api.get('/connections').then(response =>{
    setConnections(response.data.total)
}  
)
.catch(error=>{
    console.log(error)
}        
)
  
}, [connections])



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
            <Link to="/list" className="study">
              <img src={StudyIcon}  alt="study"/>
              Estudar
            </Link>

            <Link to="/register" className="give-classes">
              <img src={GiveClassesIcon}  alt="study"/>
              Dar Aulas
            </Link>
          </div>

          <span className="total-conections">
            Total de {connections} conexões realizadas {" "}
            <img src={PurpleHeartIcon} alt=""/>
          </span>

        </div>
    </div>
    );
}

export default Home;