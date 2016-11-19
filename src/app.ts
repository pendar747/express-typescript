/// <reference path="./_all.d.ts" />
"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as indexRoute from "./route";


/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();


    // configure application
    // this.config();
    this.route();
  }

  private route() {
    let router: express.Router = express.Router();

    var index: indexRoute.Index = new indexRoute.Index();

    router.get("/", index.handle.bind(index.handle) );
    
    this.app.use(router);
  }
}

const server = Server.bootstrap();
export = server.app;