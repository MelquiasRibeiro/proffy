import express from 'express';
import ClassController from './controllers/classController';

const classController = new ClassController();

const routes = express.Router();

routes.post('/classes',classController.store)

routes.get('/classes',classController.index)



export default routes;