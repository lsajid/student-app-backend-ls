const express = require("express");
const names = express.Router();
const { repeatNTimesWithSpace, capitalizeFirstLetter } = require("../utils/stringUtils.js")

names.get("/capitalizeName/:name", (req, res) => {
    const name = req.params.name;
    const capitalizedName = capitalizeFirstLetter(name)
    res.json(capitalizedName);
})

names.get('/:name/:times', (req, res) => {
    try{
        const name = req.params.name; //get name
        const times = req.params.times; //get times
        const repeatedNames = repeatNTimesWithSpace(name, times); //get result of repeatNTimesWithSpace
        res.json(repeatedNames)//send string response of result
    }catch{
        res.send("There was an error")
    }
})



module.exports = names;