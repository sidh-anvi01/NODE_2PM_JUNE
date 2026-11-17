const express=require("express")

const app=express()

app.use(express.json())


app.post("/student",(req,res)=>{
    const name=req.body.name
    const email=req.body.email 

    console.log(req.body) 
//     res.send(
//         {message:"success"},
//         {
//         name:name,
//         email:email
//     }
// )

res.json({
    message:"success",
    name:name,
    email:email
})
})

app.listen(9000)