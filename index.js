const express = require('express')
const app = express()
const port = 80

app.get("/",(req,res)=>{
    log("route access");
    res.send("this is home page")
})

app.listen(port,()=>{
    console.log("the server is started 10:06");
})
