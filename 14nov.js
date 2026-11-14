const express =require("express")
const fs=require("fs")

const app=express()


app.get("/" ,(req,res)=>{
    res.send("hello express server ")
})


app.get("/home",(req,res)=>{
    // res.send("hello")
    fs.readFile("index.html" ,"utf-8",(err,data)=>{
        res.send(data)
    })
})






app.listen(9000,()=>{
    console.log("server runnnig on port 9000")
}) 