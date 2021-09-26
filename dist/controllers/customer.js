"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.initialize = function (httpServer) {
        httpServer.get("/customer", function (req, res, next) {
            res.send(200, "Customers List");
        });
    };
    return Customer;
}());
exports.Customer = Customer;
