import React,{useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import './style.css'
import Input from '../../components/Input';
import warning from '../../assets/icons/warning.svg'
import TextArea from '../../components/TextArea';
import Select from '../../components/SelectInput';
import api from '../../services/api'
import { useHistory } from "react-router-dom";


const Register: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewSchedule(){
    setScheduleItems([...scheduleItems, {week_day:0,from:'',to:""}])
  }


function handleCreateClass(e:FormEvent){
  e.preventDefault();

   api
       .post("/classes", {
         name,
         avatar,
         whatsapp,
         bio,
         subject,
         cost: Number(cost),
         schedule: scheduleItems,
       })
       .then(() => {
         alert("Cadastro realizado com sucesso!");

         history.push("/");
       })
       .catch(() => {
         alert("Erro no cadastro!");
       });
}

function setScheduleItemValue(
  position: number,
  field: string,
  value: string
) {
  const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
    if (index === position) {
      return { ...scheduleItem, [field]: value };
    }

    return scheduleItem;
  });

  setScheduleItems(updatedScheduleItems);
}

  return (
      <div id="page-teacher-form" className="container">
        <PageHeader 
                  title="Que incrivel que você quer dar aula" 
                  description="O primiero passo é preencer esse formulário de inscrição"
        />
        <main>
          <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input name="name" label="Nome Completo" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <Input name="avatar" label="Avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>
            <Input name="whatsApp" label="WhatsApp" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>
            <TextArea name="bio" label="Biografia" value={bio} onChange={(e)=>{setBio(e.target.value)}} />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input name="cost" label="Custo por aula" value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
          </fieldset>
          <fieldset>

              <legend>
                Horários disponíveis
                <button onClick={addNewSchedule}>
                  + Novo horário
                </button>
              </legend>
              {
                scheduleItems.map((scheduleItem,index) =>{
                  return(
                    <div 
                    key={scheduleItem.week_day}
                    className="schedule-item">
                    <Select 
                    name="week-day" 
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={(e)=> setScheduleItemValue(index,'week_day',e.target.value) }
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
                    <Input 
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}  
                    onChange={(e)=> setScheduleItemValue(index,'from',e.target.value) }  />
                    <Input 
                    name="to" 
                    label="Até" 
                    type="time"  
                    value={scheduleItem.to}
                    onChange={(e)=> setScheduleItemValue(index,'to',e.target.value) }/>
                </div>
                  )
                })
              }


          </fieldset> 
          <footer>
            <p>
              <img src={warning} alt="Aviso importante"/> 
              importante! <br/>
              preencha todos os dados.
            </p> 
            <button type="submit" >
              Cadstrar
            </button>
          </footer> 
        </form>
        </main> 
      </div>
  );}

export default Register;