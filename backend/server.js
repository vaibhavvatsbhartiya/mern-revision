const express = require('express');
require('dotenv').config();

const workoutRoutes = require('./routes/Workroutes')

// express app
const app = express();

const port = process.env.PORT;

// enalble json
app.use(express.json());
// middleware
app.get("/", (req, res, next)=>{
    console.log(req.path, req.method);
    next();
})


// routes
app.use('/api/workouts', workoutRoutes);


app.listen(port, ()=>{
    console.log(`server is listenling at port number: ${port}`);
})