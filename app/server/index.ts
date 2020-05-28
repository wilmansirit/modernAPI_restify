import * as restify from "restify";
import { HttpServer } from "./httpServer";
import { Server, RequestHandler } from "restify";
import { CONTROLLERS } from "../controllers";


export class ApiServer implements HttpServer {

    private restify: Server;

    constructor() {
        this.restify = restify.createServer({ name: "CabudareWireless", version: "1.0.0" });
    }

    public get(url: string, requestHandler: RequestHandler): void {
        this.addRoute('get', url, requestHandler);
    }

    private addRoute(method: 'get' | 'post' | 'put' | 'del', url: string, requestHandler: RequestHandler): void {

        this.restify[method](url, async (req, res, next) => {
            try {
                await requestHandler(req, res, next);
            }
            catch (e) {
                console.log(e);
                res.send(500, e);
            }
        });

        console.log(`Added route ${method.toUpperCase()} ${url}`);

    }

    public start(port: number): void {

        // Middleware
        this.restify.use(restify.plugins.queryParser());
        this.restify.use(restify.plugins.bodyParser());

        // Add Controllers
        this.addControllers();

        // Start port
        this.restify.listen(port, () => console.log(`Server running on port ${port}`));

    }

    private addControllers(): void {
        CONTROLLERS.forEach(controller => controller.initialize(this));
    }

}

