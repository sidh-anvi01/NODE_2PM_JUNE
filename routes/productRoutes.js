const express=require("express")

// const app=express()

const router=express.Router() 


router.get("/allproduct" ,(req,res)=>{
    res.send("this is al;l product ")
})

router.get("/product",(req,res)=>{
    res.send("thi is product api ")
})



module.exports=router 