const mongoose =require('mongoose');
require('dotenv').config();

//Define mongoDb connection URL 
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URI;//Use correct env var name

//Setup mongoDb connection 
mongoose.connect(mongoURL);

//Get the default connection
const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected',()=>{
    console.log('Connected to mongoDb server');
});

db.on('error',(err)=>{
    console.log('Mongodb connection error',err);
});

db.on('disconnected',()=>{
    console.log("Monodb disconnected");
});

module.exports = db;
