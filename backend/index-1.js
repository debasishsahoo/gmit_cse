const express=require('express');
require('dotenv').config();
const PORT=process.env.PORT;
const HOST=process.env.HOST;

const server=express();
server.use(express.json())
server.use(express.urlencoded({extended:true}))

          



// This is Sample API to Check the API is Running or Not
        //ROUTING URL ('/') , lOGIC METHOD FOR REQUEST AND RESPONSE APPLICATION 
server.use('/',(req,res)=>{
    console.log('req.body:', req.body)
    res.status(200).json('Api is Running and Working fine')
});

server.listen(PORT,()=>{
    console.log(`Server is ON and Running http://${HOST}:${PORT} 😁✅`)
})