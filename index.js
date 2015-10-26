"use strict";

module.exports  = function requireHttps(status, message) {
    return function requireHttpsMiddleware(req, res, next) {
        if (!req.secure) {
            var err = new Error(message || 'Insecure Connection. Use HTTPS instead.');
            err.status = status || 403;
            next(err);
            return;
        }
        next();
    };
};
