import { RequestHandler } from 'restify'

export interface HttpServer {
    get(url: string, requestHandler: RequestHandler): void;
    // post(url: string, requestHandler: RequestHandler): void
}