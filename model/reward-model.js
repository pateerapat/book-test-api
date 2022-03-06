// Config

const connect = require("../core/connect");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");

// Import Schema
const rewardSchema = require("../schemas/reward-schema");

// Import Function

// Create Model
module.exports = {
    getAllReward: async () => {
        try {
            const response = await connect().then(async (mongoose) => {
                try {
                    let result = await rewardSchema.find({});
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
    getRewardById: async (query) => {
        try {
            const response = await connect().then(async (mongoose) => {
                try {
                    let result = await rewardSchema.findOne(query);
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