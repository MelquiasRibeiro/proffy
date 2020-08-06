import React,{useState,FormEvent} from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem,{Teacher} from '../../components/TeacherItem';
import './style.css';
import Input from '../../components/Input';
import Select from '../../components/SelectInput';
import api from '../../services/api';


const List: React.FC= () => {
  const [subject, setSubject] =useState('')
  const [week_day,setWeekDay] = useState('') 
  const [time,setTime] = useState('')
  const [teachers,setTeachers] =useState([]) 




  function handleCreateClass(e:FormEvent){
    e.preventDefault();
  
     api
         .get(`/classes`,{params:{
          subject,
          time,
          week_day
         }})
         .then((response) => {
           setTeachers(response.data)
  
         })
         .catch(() => {
           alert("Selecione todos os filtros para buscar professores");
         });
  }


  return (
    <div id="page-teacher-list" className="container">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form  onSubmit={handleCreateClass} id="search-teachers">
      <Select 
              name="subject" 
              label="Matéria"
              value={subject}
              onChange={(e)=>{setSubject(e.target.value)}}
              options = {
                [
                  {value:'Artes', label:'Artes'},
                  {value:'Matemática', label:'Matemática'},
                  {value:'Ciências', label:'Ciências'},
                  {value:'Biologia', label:'Biologia'},
                  {value:'Física', label:'Física'},
                  {value:'Química', label:'Química'},
                  {value:'Português', label:'Português'},
                  {value:'Ingês', label:'Ingês'},
                  {value:'Educação Física', label:'Educação Física'},
                  {value:'História', label:'História'},
                  {value:'Geografia', label:'Geografia'},
                ]
                
              }
            />        
          <Select 
              name="week-day" 
              label="Dia da Semana"
              value={week_day}
              onChange={(e)=>{setWeekDay(e.target.value)}}
              options = {
                [
                  {value:'1', label:'Segunda'},
                  {value:'2', label:'Terça'},
                  {value:'3', label:'Quarta'},
                  {value:'4', label:'Quinta'},
                  {value:'5', label:'Sexta'},
                  {value:'0', label:'Sábado'},
                  {value:'6', label:'Domingo'},
                ]
                
              }
            />  
        <Input type="time" name="time" label="Hora" value={time} onChange={(e)=>{setTime(e.target.value)}}/>
        <button type="submit">Buscar</button>
      </form>
    </PageHeader>
    <main>

      {teachers.map((teacher :Teacher)  =>{
        return  <TeacherItem  key={teacher.id} teacher = {teacher}/>
      })}

    </main>
  </div>
  );
}

export default List;