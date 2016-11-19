"use strict";
const express = require("express");
const indexRoute = require("./route");
class Server {
    constructor() {
        this.app = express();
        this.route();
    }
    static bootstrap() {
        return new Server();
    }
    route() {
        let router = express.Router();
        var index = new indexRoute.Index();
        router.get("/", index.handle.bind(index.handle));
        this.app.use(router);
    }
}
const server = Server.bootstrap();
module.exports = server.app;
