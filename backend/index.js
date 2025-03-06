const express=require('express');
const connectDB=require('./configs/db.mongo.conn')
const userRouter=require('./routers/user.routers')

require('dotenv').config();
const PORT=process.env.PORT;
const HOST=process.env.HOST;

const server=express();
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/api/user',userRouter)
  
connectDB();
server.listen(PORT,()=>{
    console.log(`Server is ON and Running http://${HOST}:${PORT} 😁✅`)
})

//127.0.0.1:5000/api/user
//127.0.0.1:5000/api/product