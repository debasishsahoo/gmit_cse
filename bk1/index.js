const express=require('express');
const connectDB=require('./configs/db.mongo.conn')
const userRouter=require('./routers/user.routers')
const session = require("express-session");
const MongoStore = require("connect-mongo");

require('dotenv').config();
const PORT=process.env.PORT;
const HOST=process.env.HOST;

const server=express();
server.use(express.json())
server.use(express.urlencoded({extended:true}))

// Configure session middleware
app.use(
    session({
      secret: process.env.SESSION_SECRET || "your_secret_key",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/usersDB",
        collectionName: "sessions",
      }),
      cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 }, // 1 hour
    })
  );




server.use('/api/user',userRouter)
  
connectDB();
server.listen(PORT,()=>{
    console.log(`Server is ON and Running http://${HOST}:${PORT} 😁✅`)
})

//127.0.0.1:5000/api/user
//127.0.0.1:5000/api/product