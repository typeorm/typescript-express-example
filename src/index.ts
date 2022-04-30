import "reflect-metadata";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";
import { AppDataSource } from "./data-source";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
AppDataSource.initialize().then(() => {
    // here you can start to work with your database

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(3000);

    console.log("Express application is up and running on port 3000");
}).catch((error) => console.log(error))
