const express = require("express");
const routes = express.Router();
const { login, regester } = require("../controllers/login_controller");



routes.post("/login", login);
routes.post("/regester", regester);
module.exports = routes;