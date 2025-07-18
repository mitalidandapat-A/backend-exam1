const express = require('express');
const cors    = require('cors');
const env     = require('dotenv').config();
const db= require('./db'); 
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const app = express();

app.use(cors()); 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const crudModel = require('./models/crude.model');

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to CRUDE API</h1>")
});




const crudeRouter = require("./routes/crude.route");
app.use("/api/crude",crudeRouter);
app.listen(PORT,HOST,()=>{
    console.log(`Express server has started at http://${HOST}:${PORT}/`);
});