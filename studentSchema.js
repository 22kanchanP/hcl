const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    rollno : Number,
    name : String ,
    marks: Number
})

// const studentmodel = mongoose.model("student3" , studentSchema)
// module.exports = studentmodel

module.exports = mongoose.model("students" , studentSchema)