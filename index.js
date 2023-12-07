const express = require("express")
const cors = require("cors")
const connection = require("./db")
const { userRouter } = require("./back/routes/user.route")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).json("welcome to app")
})
app.use("/users",userRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db server started runnin on 8000")
    }catch(error){

    }
})