const express=require('express');
require('dotenv').config();
const PORT=process.env.PORT;
const HOST=process.env.HOST;

const server=express();
server.use(express.json())
server.use(express.urlencoded({extended:true}))

let items=[]; //Sample in-Memory Database

//CREATE (insert new data in database)
//API END POINT:http://127.0.0.1:5000/api/items/insert
server.post('/api/items/insert',(req,res)=>{
    const item={id:Date.now(),...req.body}
    items.push(item);
    res.status(201).json(item);
})

// READ (all items)
//API END POINT:http://127.0.0.1:5000/api/items/view
server.get("/api/items/view", (req, res) => {
    res.status(200).json(items);
  });













server.listen(PORT,()=>{
    console.log(`Server is ON and Running http://${HOST}:${PORT} 😁✅`)
})