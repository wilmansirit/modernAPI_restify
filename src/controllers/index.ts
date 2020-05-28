import { PingController } from "./ping";
import { Customer } from "./customer";
import { Home } from "./home";


export const CONTROLLERS = [
    new PingController(),
    new Customer(),
    new Home()
]