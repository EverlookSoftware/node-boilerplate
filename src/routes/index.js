import express from 'express';
import sampleRoutes from './sampleRoutes';

const Router = express.Router();

/**
 * Apply your exported Router to whatever top level route you want.
 * Ex: Below would be the endpoint for samples.
 * [HTTP-ACTION] /api/samples/
 */
Router.use('/samples', sampleRoutes);

export default Router;
