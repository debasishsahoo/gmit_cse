const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true, 
    lowercase: true ,
    minLength: 3,
    maxLength:32 
},
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { 
    type: String, 
    required: true, 
    minLength: 8, 
    trim: true 
},
  phoneNo: {
    type: Number, 
    default:null
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
