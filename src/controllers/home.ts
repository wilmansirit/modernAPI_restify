import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { Response, Request, Next } from "restify";


export class Home implements Controller {

    public initialize(httpServer: HttpServer): void {

        httpServer.get("/", (req: Request, res: Response, next: Next) => {
            res.send(200, "Hola Mundo..!");
        })

    }
}