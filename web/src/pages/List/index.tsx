import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './style.css';
import Input from '../../components/Input';
import Select from '../../components/SelectInput';

const List: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form id="search-teachers">
      <Select 
              name="subject" 
              label="Matéria"
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
              options = {
                [
                  {value:'2', label:'Segunda'},
                  {value:'3', label:'Terça'},
                  {value:'4', label:'Quarta'},
                  {value:'5', label:'Quinta'},
                  {value:'6', label:'Sexta'},
                  {value:'1', label:'Sábado'},
                  {value:'2', label:'Domingo'},
                ]
                
              }
            />  
        <Input type="time" name="time" label="Hora"/>
      </form>
    </PageHeader>
    <main>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </main>
  </div>
  );
}

export default List;