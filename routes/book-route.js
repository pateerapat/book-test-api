// Config

const express = require("express");
const router = express.Router();
const { body, query, param } = require("express-validator");
const apiValidation = require("../validation/apiValidation");

// Import Controller

const {
    getAllBookController,
    getBookByIdController,
} = require("../controller/book-controller");

// Create Routes

router.get("/get/all", apiValidation, getAllBookController);

router.get("/get/:id", [param("id").notEmpty()], apiValidation, getBookByIdController);

module.exports = router;