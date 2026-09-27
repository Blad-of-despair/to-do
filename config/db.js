const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dbURI);

        console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Database connection failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = { connectDB };