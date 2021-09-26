"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
var PingController = /** @class */ (function () {
    function PingController() {
    }
    PingController.prototype.initialize = function (httpServer) {
        httpServer.get('/ping', function (req, res, next) {
            res.send(200, "pong");
            next();
        });
    };
    return PingController;
}());
exports.PingController = PingController;
