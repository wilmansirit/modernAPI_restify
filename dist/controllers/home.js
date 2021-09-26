"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var Home = /** @class */ (function () {
    function Home() {
    }
    Home.prototype.initialize = function (httpServer) {
        httpServer.get("/", function (req, res, next) {
            res.send(200, "Hola Mundo..!");
        });
    };
    return Home;
}());
exports.Home = Home;
