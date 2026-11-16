// // import name from "./29oct"


// // const  user=require("./29oct")

// // console.log(user.name)
// // console.log(user.age)



// // const str=Buffer.from("hello")
// // console.log(str )

// //  console.log(str.toString())

// //  console.log(Buffer.alloc(10))



// const os=require('os')

// console.log(os.arch())
// console.log(os.freemem())








const express=require("express") 


const app=express() 

const userRoutes=require("./routes/userRoutes")
const productRoutes=require("./routes/productRoutes")



app.get("/",(req,res)=>{
    res.send("health api working ")
})

app.use('/user',userRoutes) 
app.use('/pr',productRoutes) 


app.listen(9000,()=>{
    console.log("server runing on 9000 ")
})