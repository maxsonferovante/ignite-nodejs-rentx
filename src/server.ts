import express from 'express';
import { router } from './routes';
import SwaggerUi from 'swagger-ui-express';

import "reflect-metadata";

import './database';
import './shared/container';

const port = process.env.PORT || 3333;
const localhost = process.env.LOCALHOST || 'localhost';

const app = express();

app.use(express.json());

app.use("/api-docs",
    SwaggerUi.serve,
    SwaggerUi.setup(require('./swagger.json'))
);

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on http://${localhost}:${port}`)
});

