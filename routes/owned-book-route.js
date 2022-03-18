// Config

const express = require("express");
const router = express.Router();
const { body, query, param } = require("express-validator");
const verifyToken = require("../validation/verifyToken");
const apiValidation = require("../validation/apiValidation");

// Import Controller

const {
    buyBookController,
    getOwnedBookController,
} = require("../controller/owned-book-controller");

// Create Routes

router.post("/buy", [ body("book_id").notEmpty()], apiValidation, verifyToken, buyBookController);

router.get("/get/user/all", [ body("book_id").notEmpty()], apiValidation, getOwnedBookController);

module.exports = router;