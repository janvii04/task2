const express = require("express")
const app = express()
const port = 3003

const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extented: true}))


require('./dbconnection').connectiondb()
require('./models/index')

const userRoute=require("./routers/userRoute")
app.use("/users",userRoute)


app.listen(port,()=>{
    console.log(`listening at port ${port}`)
});