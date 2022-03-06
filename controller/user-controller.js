// Config

const { sign, jwt } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Import Models

const {
    checkLogin,
    login,
    checkRegister,
    register,
    pointIncrementer,
} = require("../model/user-model");


// Create Controller

module.exports = {
    loginController: async (req, res, next) => {
        try {
            const resultCheck = await checkLogin({
                id: req.body.id,
            });
            if (resultCheck.success) {
                const resultLogin = await login(req.body);
                res.status(200).json(resultLogin);
                res.end();
            } else {
                res.status(200).json({
                    success: false,
                    payload: {
                        message: "Cannot find this username.",
                    },
                });
            };
        } catch (err) {
            next(err);
        };
    },
    registerController: async (req, res, next) => {
        try {
            const emailCheck = await checkRegister({
                email: req.body.email,
            });
            if (emailCheck.success) {
                const usernameCheck = await checkRegister({
                    id: req.body.id,
                });
                if (usernameCheck.success) {
                    const password = await bcrypt.hash(req.body.password, 10);
                    req.body.password = password;
                    const response = await register(req.body);
                    res.status(200).json(response);
                    res.end();
                } else {
                    res.status(200).json({
                        success: false,
                        payload: {
                            message: "Username has been used.",
                        },
                    });
                };
            } else {
                res.status(200).json({
                    success: false,
                    payload: {
                        message: "Email has been used.",
                    },
                });
            };
        } catch (err) {
            next(err);
        };
    },
    incrementController: async (req, res, next) => {
        try {
            const resultCheck = await pointIncrementer(req.body);
            if (resultCheck.success) {
                res.status(200).json(resultCheck);
                res.end();
            } else {
                res.status(200).json(resultCheck);
            };
        } catch (err) {
            next(err);
        };
    },
};