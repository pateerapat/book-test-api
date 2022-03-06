// Config

const { sign, jwt } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Import Models

const {
    getAllReward,
    getRewardById,
} = require("../model/reward-model");


// Create Controller

module.exports = {
    getAllRewardController: async (req, res, next) => { 
        try {
            const response = await getAllReward();
            res.status(200).json(response);
            res.end();
        } catch (err) {
            next(err);
        };
    },
    getRewardByIdController: async (req, res, next) => { 
        try {
            const response = await getRewardById(req.params);
            res.status(200).json(response);
            res.end();
        } catch (err) {
            next(err);
        };
    },
};