const express=require("express")

const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const app=express()

app.use(express.json())
// mongodb connection :  

mongoose.connect("mongodb://127.0.0.1:27017/MERN")
.then(()=>console.log("database conected "))
.catch(()=>console.log(err))



//  schema: 
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})



// model :
 const user=mongoose.model("newUser" ,userSchema)



// api :


app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body 
    let existinguser=await user.findOne({email})

    if(existinguser){
        return res.json("email already exist ")
    }
const hashedPassword=await bcrypt.hash(password,10)

    let data=new user({
        name,email,password:hashedPassword
    })

    let result=await data.save()
    console.log(result) 
    res.json({
        message:'user registered' ,
        result
     })


})



app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const User=await user.findOne({email})
        if(!user){
            return res.json({
                message:"user not  found" ,
            })
        }
        const pass=await bcrypt.compare(password,User.password)

 
        if(!pass){
            return res.json({
                message:"password not mached",
            })
        }


        const token=jwt.sign({id:User._id},"khushman_lambra",{expiresIn:'1h'})

        return res.json({
            message:"loggin success ",
            success:true ,
            token
        })

    }
    catch(err){
        console.log(err)
        return res.json({
            message:"server error "
        })
    }
})




app.listen(9000)