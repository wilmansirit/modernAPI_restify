"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTROLLERS = void 0;
var ping_1 = require("./ping");
var customer_1 = require("./customer");
var home_1 = require("./home");
exports.CONTROLLERS = [
    new ping_1.PingController(),
    new customer_1.Customer(),
    new home_1.Home()
];
