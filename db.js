const mongoose =require('mongoose');
//Define mongoDb connection URL 
const mongoURL ='mongodb://localhost:27017/hotels'//Replace 'mydatabase' with your database name

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
