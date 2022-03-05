// Config

const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true,
};

const userSchema = mongoose.Schema({
    id: reqString,
    password: reqString,
    name: reqString,
    lastname: reqString,
    user_address: reqString,
    email: reqString,
    user_point: reqString,
});

module.exports = mongoose.model("user", userSchema);