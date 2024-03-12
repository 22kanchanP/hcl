const express = require("express")
const app = express()

require("./mongoose")

app.use(express.json())

const studentmodel = require("./studentSchema")

app.post("/" , async (req,resp)=>{

    
    const data = await new studentmodel(req.body)
    const result = await data.save()
    resp.send(result)
})
     

app.get("/" , async (req,resp)=>{
    
    const data = await studentmodel.find()
    resp.send(data)
})

app.put("/" , async (req,resp)=>{

    const data = await  studentmodel.updateOne({rollno : req.body.rollno} , {$set : {name : req.body.name , marks : req.body.marks}})
    resp.send(data)
})


app.delete("/" , async (req,resp)=>{
    
    const data = await studentmodel.deleteOne({rollno : req.body.rollno})
    resp.send(data)
})



app.listen(5000)