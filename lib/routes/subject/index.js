const express = require('express');
const subjectsRoutes = express.Router();
const {postSubjectController, 
    getAllSubjectsController,
    getSubjectController} = require('../../controller/subjects/index');

// Subject API routes
subjectsRoutes.post("/", postSubjectController);
subjectsRoutes.get("/", getAllSubjectsController);
subjectsRoutes.get("/:id", getSubjectController);


// tests API routes


module.exports = subjectsRoutes;

