const express=require('express')
const app=express()
app.use(express.json())
const adminController=require('../controller/admin.controller')
const { midOne } = require('../middleware/simple-middleware.js')

app.post("/registrasi",adminController.registerAdmin)
//app.post("/auth",adminController.authenticate)
module.exports=app