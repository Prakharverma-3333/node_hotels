// import express from 'express'
const express = require('express')
const app = express()//Naksha
const db = require('./db');
require('dotenv').config();
// const bodyParser = require('body-parser');
app.use(express.json());//req.body
const PORT = process.env.PORT || 3000;


//Post route to add a person
app.get('/', (req, res) => {
  res.send('Welcome to my hotel ... how can i help you,we have list of menues')
})


//Import the router files
const personRoutes = require('./RoutesDay-6/personRoutes');
const menuItemRoutes=require('./RoutesDay-6/menuItemRoutes')

//use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(3000, () => {
  
  console.log('Listening on port 3000');
})