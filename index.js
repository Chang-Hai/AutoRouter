const express = require('express');
const createRouter = require('./lib/createRouter');

module.exports = {
    createRouter,
    autoRouter: (options) => {
        const app = express();

        createRouter(app, options);

        return app;
    }
};