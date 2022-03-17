// Config

const { sign } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Import Models

const {
    checkLogin,
    login,
    checkRegister,
    register,
    pointIncrementer,
} = require("../model/user-model");

// Import Functions

const { validateEmail,
        validatePassword,
        validateUser
} = require("../functions/functions");

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
            const validEmailCheck = validateEmail(req.body.email);
            if (!validEmailCheck) {
                return res.status(200).json({
                    success: false,
                    payload: {
                        message: "Email is not valid.",
                    },
                });
            };

            const validUserCheck = validateUser(req.body.id);
            if (!validUserCheck) {
                return res.status(200).json({
                    success: false,
                    payload: {
                        message: "Username is not long enough. (3 is minimum length)",
                    },
                });
            };

            const validPasswordCheck = validatePassword(req.body.password);
            if (!validPasswordCheck) {
                return res.status(200).json({
                    success: false,
                    payload: {
                        message: "Password is not long enough. (8 is minimum length)",
                    },
                });
            };

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
            const response = await pointIncrementer(req.body);
            res.status(200).json(response);
            res.end();
        } catch (err) {
            next(err);
        };
    },
    getDataController: async (req, res, next) => {
        try {
            const userData = jwt.verify(
                req.token,
                process.env.SECRET,
                (err, authData) => {
                    return authData.result;
                },
            );
            res.status(200).json({
                success: true,
                    payload: {
                        data: userData,
                    },
            });
        } catch (err) {
            next(err);
        }
    },
};