import { ApiServer } from './server';

import * as dotenv from 'dotenv';
dotenv.config();

const server = new ApiServer();
server.start(<number><any>process.env.HTTP_PORT);
