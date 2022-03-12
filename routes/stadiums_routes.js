const express = require("express");
const { getAllSatdiums, createStadium, getStadium } = require('../controllers/stadiums_controller');
const routes = express.Router();
const stadiumImages = require("../controllers/upload_controller");
routes.get("/stadiums", getAllSatdiums);
routes.post("/stadiums", createStadium);
routes.post("/stadiums/images", stadiumImages);
routes.get("/stadiums/:id", getStadium);
module.exports = routes;