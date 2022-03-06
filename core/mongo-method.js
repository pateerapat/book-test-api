// Config

const connect = require("./connect");

// Import Schema
const userSchema = require("../schemas/user-schema");

module.exports = {
    insertData: async (collectionName, data) => {
        let payload = await connect().then(async (mongoose) => {
            try {
                if (collectionName == "users") {
                    collectionName = userSchema;
                };
                await new collectionName(data).save();
                return result = {
                    success: true,
                };
            } finally {
                mongoose.connection.close();
            };
        });
        return payload;
    },
    findManyData: async (collectionName, query) => {
        let payload = await connect().then(async (mongoose) => {
            try {
                if (collectionName == "users") {
                    collectionName = userSchema;
                };
                let result = await collectionName.find(query);
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
        return payload;
    },
    findOneData: async (collectionName, query) => {
        let payload = await connect().then(async (mongoose) => {
            try {
                if (collectionName == "users") {
                    collectionName = userSchema;
                };
                let result = await collectionName.findOne(query);
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
        return payload;
    },
    incrementOneData: async (collectionName, query, incrementer) => {
        let payload = await connect().then(async (mongoose) => {
            try {
                if (collectionName == "users") {
                    collectionName = userSchema;
                };
                let result = await collectionName.updateOne(query, { $inc: incrementer });
                return result = {
                    success: true,
                };
            }finally {
                mongoose.connection.close();
            };
        });
    },
}