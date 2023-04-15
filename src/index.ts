import "reflect-metadata";
import { AppDataSource } from "./data-source"
import * as express from "express";
const cors = require('cors');
const BodyParser = require('body-parser');
import * as bodyParser from "body-parser";
import AppRoutes from "./routes";

// set up the app
const app = express()
app.use(express.json())
app.use(cors());
app.use(BodyParser.json());

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.use("/api/v1", AppRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 3000
      `);
});



// createConnection().then(async connection => {

//     // create express app
//     const app = express();
//     app.use(bodyParser.json());

//     // register all application routes
//     AppRoutes.forEach(route => {
//         app[route.method](route.path, (request: Request, response: Response, next: Function) => {
//             route.action(request, response)
//                 .then(() => next)
//                 .catch(err => next(err));
//         });
//     });

//     // run app
//     app.listen(3000);

//     console.log("Express application is up and running on port 3000");

// }).catch(error => console.log("TypeORM connection error: ", error));
