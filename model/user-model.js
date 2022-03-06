// Config

const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");

// Import Mongo Method

const { 
    findOneData, insertData, incrementOneData 
} = require("../core/mongo-method");

// Import Function



// Create Model
module.exports = {
    checkRegister: async (data) => {
        try {
            let response = await findOneData("users", data);
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
            console.log(err);
        };
    },
    register: async (data) => {
        try {
            let response = await insertData("users", data);
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
            console.log(err);
        };
    },
    checkLogin: async (data) => {
        try {
            let response = await findOneData("users", data);
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
            console.log(err);
        };
    },
    login: async (data) => {
        try {
            const userData = await findOneData("users", {
                "id": data.id,
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
            console.log(err);
        };
    },
    pointIncrementer: async (data) => {
        try {
            let response = await incrementOneData("users", { id: data.id }, { user_point: data.point });
            if (response.success) {
                response = {
                    success: true,
                    payload: {
                        message: "Point incremented.",
                    },
                };
            } else {
                response = {
                    success: false,
                    payload: {
                        message: "Failed to incremented.",
                    },
                };
            };
            return response;
        } catch (err) {
            console.log(err);
        };
    },
};