const express = require("express");
const studentData = require("../studentData.json");
const studentsController = express.Router();

studentsController.get('/', (req, res) => {
    res.send(studentData);
})

studentsController.get('/:id', (req, res) => {
    try{
        const { id } = req.params;

        if(!/[0-9]/.test(id)){
            res.send("Student id must be a number");
            return;
        }
        const singleStudent = studentData.students.find((student) => {
            return student.id === id;
        })
        if(singleStudent){
            res.json(singleStudent)
        }
        else{
            res.json({error: "Student cannot be found"})
        }
    }catch (err) {
        res.status(500).send("Error")
    }
})

module.exports =  studentsController;