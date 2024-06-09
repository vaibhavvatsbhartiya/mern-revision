const express = require('express');
require('dotenv').config();


const app = express();

const port = process.env.PORT;

app.get("/", (req, res)=>{
    res.status(200).json({message: "Hello V2"});
    // res.status(200).send(`This is a basic server which is running on port ${port}.`)
})

app.listen(port, ()=>{
    console.log(`server is listenling at port number: ${port}`);
})