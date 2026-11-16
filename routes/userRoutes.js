const express=require("express")

// const app=express()

const router=express.Router() 


router.get("/alluser" ,(req,res)=>{
    res.send("this is al;l user ")
})

router.get("/profile",(req,res)=>{
    res.send("thi is profile api ")
})



module.exports=router 