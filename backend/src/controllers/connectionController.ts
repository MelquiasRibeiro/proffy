import { Request, Response} from 'express';
import db from '../database/connection';


class ConnectionController {

  async index(req: Request, res: Response) {
    const totalConnections = await db("connections").count("* as total");

    const { total } = totalConnections[0];

    return res.json({ total });
  }
  
  async store(req: Request, res: Response) {

    const{user_id} = req.body;

   try{
    await db("connections").insert({
      user_id
    })

    return res.status(201).send();

   }catch(err){
    console.log(err)

    return res.status(400).json({error: err})
   }
  }
}

export default ConnectionController ;