import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();
const upload = multer(uploadConfig);

//MVC
//Model - representacao da tabelea
//Views - como fica disponivel pro front
//Controllers - onde fica a logica das rotas

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.delete('/orphanages/deleteall', OrphanagesController.delete);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;