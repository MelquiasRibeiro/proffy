import React from 'react'

import whatsappIcon from '../../assets/icons/whatsapp.svg'
import api from '../../services/api';

import './style.css';

export interface Teacher {
    id: number,
    subject :string,
    cost: number,
    user_id: number,
    avatar: string,
    name: string,
    whatsapp: string,
    bio:string
}

interface TeacherProps {
  teacher: Teacher
}

const TeacherItem : React.FC<TeacherProps> = (props) => {

  function createNewConnection() {
    api.post("/connections", {
      user_id: props.teacher.id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={props.teacher.avatar} alt={props.teacher.name}/>
        <div>
          <strong>{props.teacher.name}</strong>
          <span>{props.teacher.subject}</span>
        </div>
      </header>

      <p>
      {props.teacher.bio}
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {props.teacher.cost},00</strong>
        </p>
        <a   target="_blank" rel="noopener noreferrer"
          href={`https://wa.me/${props.teacher.whatsapp}`}
          onClick={createNewConnection}>
          <img src={whatsappIcon} alt="Entrar em contato"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;