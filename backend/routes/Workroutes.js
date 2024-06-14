const express = require('express');

const router = express.Router();


// get request
router.get('/',(req,res)=>{
    res.json({message: "reciving all workouts"});
})

// get request by id's
router.get('/:id',(req,res)=>{
    res.json({message: `recive ${id} workout`});
})

// get request
router.post('/',(req,res)=>{
    res.json({message: "sending all workouts"});
})

// get request
router.delete('/',(req,res)=>{
    res.json({message: "remove all workouts"});
})

// get request
router.put('/',(req,res)=>{
    res.json({message: "update all workouts"});
})

module.exports = router;