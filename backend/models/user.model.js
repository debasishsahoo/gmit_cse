const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required:[true, "Name is required"],
    trim: true, 
    lowercase: true ,
    minLength: [3, "Name must be at least 3 characters"],
    maxLength:[32, "Name must be at most 32 characters"],
},
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please provide a valid email address",
    ],
  },
  password: { 
    type: String, 
    required: [true, "Password is required"],
    minLength:[8, "Password must be at least 8 characters"],
    trim: true,
    select: false,
},
  phoneNo: {
    type: Number, 
    default:null,
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
