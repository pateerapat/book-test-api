// Config

const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");

// Import Mongo Method

const { 
    findOneData, insertData 
} = require("../core/mongo-method");

// Import Function



// Create Model
module.exports = {
    checkRegister: async (data) => {
        try {
            let response = await findOneData(data);
            if (response.success) {
                response = {
                    success: false,
                    payload: {
                        message: "Register failed, data has been used.",
                    },
                };
            } else {
                response = {
                    success: true,
                    payload: {
                        message: "Register pass.",
                    },
                };
            };
            return response;
        } catch (err) {
            next(err);
        };
    },
    register: async (data) => {
        try {
            let response = await insertData("user", data);
            if (response.success) {
                response = {
                    success: true,
                    payload: {
                        message: "Register successful.",
                    },
                };
            } else {
                response = {
                    success: false,
                    payload: {
                        message: "Register failed",
                    },
                };
            };
            return response;
        } catch (err) {
            next(err);
        };
    },
    checkLogin: async (data) => {
        try {
            let response = await findOneData({
                username: data.username,
            });
            if (response.success) {
                response = {
                    success: true,
                    payload: {
                        message: "Login pass.",
                    },
                };
            } else {
                response = {
                    success: false,
                    payload: {
                        message: "Login failed, No data found.",
                    },
                };
            };
            return response;
        } catch (err) {
            next(err);
        };
    },
    login: async (data) => {
        try {
            const userData = await findOneData({
                username: data.username,
            });
            const match = await bcrypt.compare(data.password, userData.payload.data.password);
            if (match) {
                const jsonToken = sign({ result: userData.payload.data }, process.env.SECRET, {
                    expiresIn: "1d",
                });
                return {
                    success: true,
                    payload: {
                        message: "Login successfully.",
                        token: jsonToken,
                    },
                };
            } else {
                return {
                    success: false,
                    payload: {
                        message: "Password does not match.",
                    },
                };
            };
        } catch (err) {
            next(err);
        };
    },
};