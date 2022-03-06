// Config

const { sign, jwt } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Import Models

const {
    getAllBook,
    getBookById,
} = require("../model/book-model");

// Create Controller

module.exports = {
    getAllBookController: async (req, res, next) => { 
        try {
            const response = await getAllBook();
            res.status(200).json(response);
            res.end();
        } catch (err) {
            next(err);
        };
    },
    getBookByIdController: async (req, res, next) => { 
        try {
            const response = await getBookById(req.params);
            res.status(200).json(response);
            res.end();
        } catch (err) {
            next(err);
        };
    },
};