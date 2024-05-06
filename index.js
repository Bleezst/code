const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express()
const port=3000
const adminRoute=require("./routes/admin.route")
// const foodRoute=require("./routes/food.route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/admin",adminRoute)
// app.use("/food",foodRoute)

app.listen(port,()=>{console.log(`server run on ${port}`)})