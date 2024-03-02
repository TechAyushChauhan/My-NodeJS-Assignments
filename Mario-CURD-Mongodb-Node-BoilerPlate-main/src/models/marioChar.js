const mongoose = require('mongoose');

//  Your code goes here
const Schema = new mongoose.Schema({
    name:String,
     weight:Number
  });
  const marioModel = mongoose.model('mariochar', Schema);

module.exports = marioModel;