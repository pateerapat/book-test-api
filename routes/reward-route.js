// Config

const express = require("express");
const router = express.Router();
const { body, query, param } = require("express-validator");
const apiValidation = require("../validation/apiValidation");

// Import Controller

const {
    getAllRewardController,
    getRewardByIdController,
} = require("../controller/reward-controller");

// Create Routes

router.get("/get/all", apiValidation, getAllRewardController);

router.get("/get/:id", [param("id").notEmpty()], apiValidation, getRewardByIdController);

module.exports = router;