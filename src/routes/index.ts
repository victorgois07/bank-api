import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger/swagger.json';
import * as tsoaRoutes from './routes';

const routes = Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
tsoaRoutes.RegisterRoutes(routes);

export default routes;
