import { HttpServer } from "../server/httpServer";

export interface Controller {
    initialize(httServer: HttpServer): void;
};