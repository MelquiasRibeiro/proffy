import React from 'react';
import PageHeader from '../../components/PageHeader';
import './style.css'
import Input from '../../components/Input';
import warning from '../../assets/icons/warning.svg'
import TextArea from '../../components/TextArea';
import Select from '../../components/SelectInput';

const Register: React.FC = () => {
  return (
      <div id="page-teacher-form" className="container">
        <PageHeader 
                  title="Que incrivel que você quer dar aula" 
                  description="O primiero passo é preencer esse formulário de inscrição"
        />
        <main>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input name="name" label="Nome Completo"/>
            <Input name="avatar" label="Avatar"/>
            <Input name="whatsApp" label="WhatsApp"/>
            <TextArea name="bio" label="Biografia" />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input name="cost" label="Custo por aula"/>
          </fieldset>
          <fieldset>

              <legend>
                Horários disponíveis
                <button>
                  + Novo horário
                </button>
              </legend>
              <div className="schedule-item">
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
                  <Input name="from" label="Das" type="time"/>
                  <Input name="to" label="Até" type="time"/>
              </div>


          </fieldset> 
          <footer>
            <p>
              <img src={warning} alt="Aviso importante"/> 
              importante! <br/>
              preencha todos os dados.
            </p> 
            <button type="button" >
              Cadstrar
            </button>
          </footer> 
        </main> 
      </div>
  );}

export default Register;