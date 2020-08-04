import { Request, Response} from 'express';
import db from '../database/connection';
import convertHour from '../utils/convertHour';


class ClassController {

  async index(req: Request, res: Response) {
    const filter = req.query;
    const week_day = filter.week_day as string; 
    const subject = filter.subject as string; 
    const time = filter.time as string; 

    
    
    if(!filter.week_day || !filter.subject ||!filter.time){
      return res.status(404).
      json({
        error:"any filter selected"
      });
    }
    
    const timeInMinutes = convertHour(time)
   

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return res.json(classes)
  
  }


  async store(req: Request, res: Response) {
    interface ScheduleItem{
      week_day: number;
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
      week_day:scheduleIten.week_day,
      from: convertHour(scheduleIten.from ),
      to: convertHour(scheduleIten.to )
     }
  })
  await trx('class_schedule').insert(
  classSchedule  
  )

  await trx.commit()


  return res.status(201).json({sucess:'Registrado com sucesso'});
    } catch(err){

      console.log(err)
      await trx.rollback();

      return res.json({
        error:"houve um erro ao cadastrar, por favor, tente novamente"
      }).status(400)
    }

  }
}

export default ClassController;