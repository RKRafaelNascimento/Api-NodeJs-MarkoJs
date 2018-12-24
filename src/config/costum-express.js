require('marko/node-require').install();
require('marko/express');

const express = require("express")
const app = express();

const router = require("../app/router/router-test")
router(app);

module.exports = app;