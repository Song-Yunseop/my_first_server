const express = require("express");

const app = express();

app.use('/',(req, res)=>{
    res.send("test");
})

app.listen(3000,()=> {
    console.log("http://localhost:3000");
})