"use strict";
var Route;
(function (Route) {
    class Index {
        handle(req, res, next) {
            res.render("index");
        }
    }
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
