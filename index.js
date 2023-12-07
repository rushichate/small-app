const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).json("welcome to app")
})

app.listen(process.env.port,()=>{
    console.log("server started runnin on 7000")
})