// Config

const connect = require("./connect");

// Import Schema
const userSchema = require("../schemas/user-schema");

module.exports = {
    insertData: async (collectionName, data) => {
        await connect().then(async (mongoose) => {
            try {
                if (collectionName == "user") {
                    collectionName = userSchema;
                }
                await new collectionName(data).save();
                return result = {
                    success: true,
                };
            } finally {
                mongoose.connection.close();
            };
        });
    },
    findManyData: async (query) => {
        await connect().then(async (mongoose) => {
            try {
                const result = await userSchema.find(query);
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
    },
    findOneData: async (query) => {
        await connect().then(async (mongoose) => {
            try {
                const result = await userSchema.findOne(query);
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
    },
}