const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');
const databasefn=require("./databasefn/databasefn")

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.get("/mario",async (req,res)=>{
    let data=await marioModel.find();
       res.json(data);

    });

app.get("/mario/:id",async (req,res)=>{
         let id = req.params.id.split(":")
      if(await databasefn.checkid(id[id.length-1])){
       try {
          let data = await marioModel.find({"_id": id[id.length-1]});
         
         res.json(data[0]);
      } catch (error) {
          console.error(error);
      }
      }else{
       res.status(400);
       res.json({message: "id not found"})
      }
     
});
app.post("/mario",async (req,res)=>{
      let validdata=databasefn.check_char(req.body.name,req.body.weight);
      if(validdata==0){
         res.status(201)
         try {
         let data=await marioModel.create(req.body);
         res.json(data);} catch (error) {
            res.status(400);        
            res.json({message:error});
        }}
         else{
         res.status(400);        
         res.json({message:validdata});}
         
});
app.patch("/mario/:id",async (req,res)=>{
        let id = req.params.id.split(":")
        if(await databasefn.checkid(id[id.length-1])){
         try {
            await marioModel.updateOne({"_id": id[id.length-1]}, {$set: req.body});
            let data = await marioModel.find({"_id": id[id.length-1]});         
         res.json(data[0]);
        } catch (error) {
            console.error(error);
        }
        }else{
         res.status(400);
         res.json({message: "id not found"})
        }
        
});
app.delete("/mario/:id",async (req,res)=>{
            let id = req.params.id.split(":")
            if(await databasefn.checkid(id[id.length-1])){
             try {
               await marioModel.deleteOne({"_id": id[id.length-1]}, {$set: req.body});
               
               res.json({message:'character deleted'});
            } catch (error) {
                console.error(error);
            }
            }else{
             res.status(400);
             res.json({message: "id not found"})
            }
});
app.all('/*',(req,res)=>{
      res.json({message:"api not found"})
})


module.exports = app;