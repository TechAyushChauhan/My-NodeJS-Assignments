const mongoose = require("mongoose");
const marioModel = require("../models/marioChar");
const { ObjectId } = require('mongodb');

function check_char(name, weight) {
    if(name==undefined||name==""){
        return "name is missing"
    }
    if(weight==undefined||weight==""){
        return "weight is missing"
    }
    return 0;
}

async function checkid(id) {
    if (ObjectId.isValid(id)) {
    let data=await marioModel.findOne({"_id":id});
    if(data===null){
        return false;
    }
    return true}else{
        return false
    }
}
module.exports={
    checkid,
    check_char
}