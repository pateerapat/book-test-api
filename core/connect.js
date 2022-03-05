// Config

const mongoose = require("mongoose");
const mongoPath = "mongodb+srv://it-kmitl-book-service:iPnrOUZxy5Z9TsPQ@book-service-east.zgdyk.mongodb.net/plt-book-service?retryWrites=true&w=majority";

//process.env.MONGODB_URI
//mongodb+srv://it-kmitl-book-service:iPnrOUZxy5Z9TsPQ@book-service-east.zgdyk.mongodb.net/plt-book-service?retryWrites=true&w=majority

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return mongoose;
};