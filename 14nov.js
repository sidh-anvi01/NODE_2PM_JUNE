// const express =require("express")
// const fs=require("fs")

// const app=express()
// // 

// app.get("/" ,(req,res)=>{
//     res.send("hello express server ")
// })


// app.get("/home",(req,res)=>{
//     // res.send("hello")
//     fs.readFile("index.html" ,"utf-8",(err,data)=>{
//         res.send(data)
//     })
// })






// app.listen(9000,()=>{
//     console.log("server runnnig on port 9000")
// }) 



// * MIDDELWARES : ----- 



const express=require('express')

const app=express()



function check(req,res,next){
    console.log("this is route level middelware ")
    next()

}

app.get("/home",(req,res)=>{
    res.send("this isn home")
})

app.get('/profile',check,(req,res)=>{
    res.send("this is profile with middelware ")
})

app.listen(5000)

// function abc(req,res,next){
//     console.log("middelware excduted")
//     next()
// }

// app.use(abc)


// app.get("/",(req,res)=>{
//     res.send("jello")
// }) 


// app.listen(8000)




// function check(req,res,next){
//     console.log("this is route level middelware ")
//     next()

// }

// app.get('/profile',check,(req,res)=>{
//     res.send("this is profile with middelware ")
// })

// app.listen(6900)