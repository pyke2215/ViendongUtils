const express = require('express');
const testsRoutes = express.Router();
const {postTestscontroller, getAllTestsController, getTestsController } = require('../../controller/tests/index');

// Subject API routes
testsRoutes.post("/", postTestscontroller);
testsRoutes.get("/", getAllTestsController);
testsRoutes.get("/:id", getTestsController);


// tests API routes


module.exports = testsRoutes;

