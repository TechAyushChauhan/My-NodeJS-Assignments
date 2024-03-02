const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog',async (req,res)=>{
    const data =await Blog.find({"topic":req.query.search});
     res.json({
        status:"success",
        result:data}
        
        );
});

router.post('/blog',async (req,res)=>{
    const insertdata =await Blog.create(req.body);
    res.json({
        status:"success",
        result:insertdata}
        
        );
});


router.put('/blog/:id',async (req,res)=>{
    let id=req.params.id.split(":");
    await Blog.updateOne({_id:id[id.length-1]},{$set:req.body});
    let data=await Blog.find({_id:id[id.length-1]})
    res.json({
        status:"success",
        result:data[0]}
        
        );
});
router.delete('/blog/:id',async (req,res)=>{
    let id=req.params.id.split(":")
    
    let data=await Blog.find({_id:id[id.length-1]})
    await Blog.deleteOne({_id:id[id.length-1]});
    res.json({
        status:"success",
        result:data[0]}
        
        );
});
module.exports = router;