const express=require("express")

const mongoose=require("mongoose")


const app=express()

app.use(express.json())
// mongodb connection :  

mongoose.connect("mongodb://127.0.0.1:27017/MERN")
.then(()=>console.log("database conected "))
.catch(()=>console.log(err))



//  schema: 
const userSchema=new mongoose.Schema({
    name:String,
    email:String
})



// model :
 const user=mongoose.model("user" ,userSchema)



// api :

app.post("/create",async(req,res)=>{
    const userData=new user(req.body)
    const result=await userData.save()
    console.log(result)
    res.send(result)
})



app.get("/users",async(req,res)=>{
    const result=await user.find()
    res.send(result)
})
app.listen(9000)