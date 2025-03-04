const express=require('express');


const app=express();

app.use('/check',(req,res)=>{
    res.send('This is Check')
});

app.use('/use',(req,res)=>{
    res.send('This is Use')
});



app.listen(5000,()=>{
    console.log('Server is Started..')
})