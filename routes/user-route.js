// Config

const express = require("express");
const router = express.Router();
const verifyToken = require("../validation/verifyToken");
const { body, query } = require("express-validator");
const apiValidation = require("../validation/apiValidation");

// Import Controller

const {
    registerController,
    loginController,
} = require("../controller/user-controller");

// Create Routes

router.post("/register", [body("id").notEmpty(), body('password').notEmpty(), body('name').notEmpty(), body('lastname').notEmpty(), 
body('user_address').notEmpty(), body('email').notEmpty()], apiValidation, registerController);

router.post("/login", [body("username").notEmpty(), body("password").notEmpty], apiValidation, loginController);

module.exports = router;