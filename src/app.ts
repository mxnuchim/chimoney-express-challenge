import express, {NextFunction, Request, Response} from "express";
import routes from "./routes";
import helmet from "helmet";
import swaggerDocs from "./utils/swagger";

const app = express();
const port = 3000;

//So I'm using helmet for this. It's a security measure I use to make sure all my apps have a basic layer of security
app.use(helmet());

app.use(express.json());

// app.use(express.urlencoded({extended: true}));

//Routes
routes(app);

//Error handling
// async function throwError() {
//     throw new Error("Something bad happened here, check it out");
// }

app.listen(3000, () => {
    console.log(`Application listening on http://localhost:${port}`)
    swaggerDocs(app, port)
});