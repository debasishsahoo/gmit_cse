const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const SALT = parseInt(process.env.SALT, 10);
const SECRET_KEY = process.env.JWT_SECRET

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


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Remove password before returning user object
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
