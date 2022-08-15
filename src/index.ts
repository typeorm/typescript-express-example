import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";
import * as cors from "cors";
import cookieParser = require("cookie-parser");

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    const corsConfig = {
        origin: 'http://localhost:3000',
        credentials: true,
      };

    const app = express();
    app.use(bodyParser.json());
    app.use(cors(corsConfig)) 
    app.options('*', cors(corsConfig));
    app.use(cookieParser());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() =>next())
                // .catch(err => next(err));
        });
    });

    // run app
    app.listen(3002);

    console.log("Express application is up and running on port 3002");

}).catch(error => console.log("TypeORM connection error: ", error));
