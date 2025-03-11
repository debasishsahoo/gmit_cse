const express=require('express');
const cors = require("cors"); // Import CORS
const connectDB=require('./configs/db.mongo.conn')
const userRouter=require('./routers/user.routers')

require('dotenv').config();
const PORT=process.env.PORT;
const HOST=process.env.HOST;

const server=express();
server.use(express.json())
server.use(express.urlencoded({extended:true}))
// ✅ Enable CORS
server.use(
    cors({
      // origin: "*", // Allow frontend to access the API
      origin: "http://localhost:5173", //Production  Value
      credentials: true, // Allow cookies & authentication headers
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    })
  );
  

server.use('/api/user',userRouter)
  
connectDB();
server.listen(PORT,()=>{
    console.log(`Server is ON and Running http://${HOST}:${PORT} 😁✅`)
})

//127.0.0.1:5000/api/user
//127.0.0.1:5000/api/product