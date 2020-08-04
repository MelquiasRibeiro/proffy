import express from 'express';
import ClassController from './controllers/classController';
import ConnectionController from './controllers/connectionController';

const classController = new ClassController();
const connectionController = new ConnectionController();

const routes = express.Router();

routes.post('/classes',classController.store);
routes.get('/classes',classController.index);

routes.post('/connections',connectionController.store);
routes.get('/connections',connectionController.index);




export default routes;