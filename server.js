const express=require('express')
const app=express();
const cors=require('cors')
const Data=require('./Data')
const mongoose=require('mongoose')

app.use(express.json())
app.options('*',cors())

mongoose.connect('mongodb+srv://siddharth:siddharth%40123@pettycash.uabgufe.mongodb.net/?retryWrites=true&w=majority').then(console.log('connected to db'))

async function getData(collection,res){
    try{
       const data= await Data.find({})
       if(data){
           res.send(data)
           console.log(data)
       }
   }catch (e){
       res.send("Encountered Error")
       console.log(e.message)
   }
}

async function addData(obj,res){
    try{
       const data= await Data.create(obj)
       if(data){
           res.send(data)
           console.log(data)
       }
   }catch (e){
       res.send("Encountered Error")
       console.log(e.message)
   }
}


app.param('name', function(req, res, next, name) {
    req.name = name;
    next();
  });
  
app.get('/:name', function(req, res) {
    console.log(req.name)
    getData(req.name,res)
  });

  
app.get('/', function(req, res) {
    res.send("Server running")
  });

  app.post('/:name', function(req, res) {
    addData(req.body,res)
  });

  app.listen(process.env.PORT || 5000)
