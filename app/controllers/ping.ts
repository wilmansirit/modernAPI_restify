import { Controller } from './controller';
import { HttpServer } from '../server/httpServer';
import { Request, Response, Next } from 'restify';

export class PingController implements Controller {

    public initialize(httpServer: HttpServer): void {

        httpServer.get('/ping', (req: Request, res: Response, next: Next) => {
            res.send(200, "pong");
            next();
        })

    }

}