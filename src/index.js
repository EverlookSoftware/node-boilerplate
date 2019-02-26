import cors from 'cors';
import debug from 'debug';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import Router from './routes';

/**
 * Instantiates debug module with "server" namespace
 */
const log = debug('app:server');

/**
 * Parses root level .env into process.env
 */
dotenv.config();

const { PORT = 8008 } = process.env;
const app = express();

/**
 * Middlewares
 */
app.use(bodyParser.json());
app.use(cors());

app.use('/api', Router);

/**
 * Server init
 */
app.listen(PORT, () => log(`Server is listening on ${PORT}`));
