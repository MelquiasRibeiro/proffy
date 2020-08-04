import { Request, Response} from 'express';
import db from '../database/connection';
import convertHour from '../utils/convertHour';


class CalssController {
  async store(req: Request, res: Response) {
    interface ScheduleItem{
      wek_day: number;
      from:string;
      to:string;
    }
    const {
        name,
        avatar, 
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = req.body;

    const trx =await db.transaction();
    try{
          
    const insertedUserIds =  await trx('users').insert({
      name,
      avatar, 
      whatsapp,
      bio,
  })
  const user_id = insertedUserIds[0];
  
  const insertedClasssesIds = await trx('classes').insert({
    subject,
    cost,
    user_id
  })

  const class_id = insertedClasssesIds[0]

  const classSchedule = schedule.map((scheduleIten:ScheduleItem)=>{
     return {
      class_id,
      wek_day:scheduleIten.wek_day,
      from: convertHour(scheduleIten.from ),
      to: convertHour(scheduleIten.from )
     }
  })
  await trx('class_schedule').insert(
  classSchedule  
  )

  await trx.commit()


  return res.status(201).json({sucess:'Registrado com sucesso'});
    } catch(err){

      await trx.rollback();

      return res.json({
        error:"houve um erro ao cadastrar, por favor, tente novamente"
      }).status(400)
    }

  }
}

export default CalssController;