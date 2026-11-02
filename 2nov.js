const http = require("http")
const fs = require("fs")



// const server=http.createServer((req,res)=>{

//     // console.log("hello server ")
//     // console.log(req.url)
//     // // res.end("hello world ")
//     // res.end(`<h1>hello</h1>
//     //     `)
// fs.readFile("index.html" ,"utf-8" ,(err,data)=>{
//     if(err){
//         console.log(err)

//     }else{
//         res.end(data)
//     }
// })




// })


// server.listen(9000)




// * multiple routes  


const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("thiis is home page")
    }
    if (req.url == "/about") {
        // res.end("this is about page ")
        fs.readFile("index.html", "utf-8", (err, data) => {
            res.end(data)
        })
    }



    if (req.url == "/contact") {
        // res.end("this is contact pge")
         fs.readFile("contact.html", "utf-8", (err, data) => {
            res.end(data)
        })
    }


})


server.listen(9000) 




fs.writeFileSync("demo.txt","hello world ")
fs.appendFileSync("demo.txt","\n hello servee r form node js ")