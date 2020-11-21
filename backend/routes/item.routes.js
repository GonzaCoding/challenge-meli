'use strict';

const { Router } = require("express");
const ItemController = require('../controllers/item.controller');

let ItemRoutes = Router();

ItemRoutes.get("/items", ItemController.search);
ItemRoutes.get("/items/:id", ItemController.getItem);

module.exports = ItemRoutes;