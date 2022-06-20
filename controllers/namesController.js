const express = require("express");
const names = express.Router();
const { repeatNTimesWithSpace } = require("../utils/stringUtils.js")

names.get('/:name/:times', (req, res) => {
    try{
        //get name
        const name = req.params.name;
        //get times
        const times = req.params.times;
        //get result of repeatNTimesWithSpace
        const repeatedNames = repeatNTimesWithSpace(name, times);
        //send string response of result
        res.send(repeatedNames)
    }catch{
        res.send("There was an error")
    }
})

module.exports = names;