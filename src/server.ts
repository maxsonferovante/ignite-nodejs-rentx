import express from 'express';
import { router } from './routes';
import SwaggerUi from 'swagger-ui-express';
import "express-async-errors";
import "reflect-metadata";
import { AppError } from './errors/AppError';

import createConnection from "./database";
import './shared/container';

const port = process.env.PORT || 3333;
const localhost = process.env.LOCALHOST || 'localhost';


createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs",
    SwaggerUi.serve,
    SwaggerUi.setup(require('./swagger.json'))
);

app.use(router);

app.use(
    (err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                error: err.message
            });
        }
        return response.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
);

app.listen(port, () => {
    console.log(`Server is running on http://${localhost}:${port}`)
});

