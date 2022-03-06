// Config

const connect = require("../core/connect");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");

// Import Schema
const bookSchema = require("../schemas/book-schema");

// Import Function

// Create Model
module.exports = {
    getAllBook: async () => {
        try {
            const response = await connect().then(async (mongoose) => {
                try {
                    let result = await bookSchema.find({});
                    if (result.length == 0) {
                        result = {
                            success: false,
                            payload: {
                                message: "No data found.",
                            },
                        };
                    } else {
                        result = {
                            success: true,
                            payload: {
                                data: result,
                            },
                        };
                    };
                    return result;
                } finally {
                    mongoose.connection.close();
                };
            });
            return response;
        } catch (err) {
            console.log(err);
        };
    },
    getBookById: async (query) => {
        try {
            const response = await connect().then(async (mongoose) => {
                try {
                    let result = await bookSchema.findOne(query);
                    if (result == null) {
                        result = {
                            success: false,
                            payload: {
                                message: "No data found.",
                            },
                        };
                    } else {
                        result = {
                            success: true,
                            payload: {
                                data: result,
                            },
                        };
                    };
                    return result;
                } finally {
                    mongoose.connection.close();
                };
            });
            return response;
        } catch (err) {
            console.log(err);
        };
    },
};