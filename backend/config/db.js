const mongoose = require("mongoose");

const connectDB = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
            socketTimeoutMS: 10000,
            family: 4,
        });
        console.log("MongoDB Connected Successfully 🛢️");
        return true;
    }
    catch (error){
  console.error("MongoDB Connection Failed :",error.message);
  throw error;
    }
};

module.exports = connectDB;