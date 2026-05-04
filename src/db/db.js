const mongoose =require('mongoose')
require('dotenv').config();

async function connectDB (){

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB!!!")
    }catch(err){
        console.error('DB connection failed',err);
    }



}


module.exports = connectDB;