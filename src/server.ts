import { json } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import express, { Application, ErrorRequestHandler } from 'express';
import expressWinston from 'express-winston';
import helmet from 'helmet';
import morgan from 'morgan';
import { join } from 'path';
import routes from './routes';
import './routes/routes';
import logger from './utils/logger';

const envConfig = config({ path: join(__dirname, '../.env') });
dotenvExpand.expand(envConfig);

const app: Application = express();

app.use(json());
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());

const errorHandler: ErrorRequestHandler = (err, req, res) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
};

app.use(routes);
app.use(
  expressWinston.logger({
    winstonInstance: logger,
    msg: 'HTTP {{req.method}} {{req.url}}',
  })
);

app.use(
  expressWinston.errorLogger({
    winstonInstance: logger,
  })
);
const PORT = process.env.PORT || 3000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The connection URL is ${process.env.DATABASE_URL}`);
  console.log(`Server is running on port ${PORT}`);
});

export default app;
