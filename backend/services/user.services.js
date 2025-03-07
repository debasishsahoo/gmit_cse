const userModel = require("../models/user.model");
require("dotenv").config();
const SALT = parseInt(process.env.SALT, 10);
const SECRET_KEY = process.env.JWT_SECRET

const userServices = {
  INSERT: async (userPayload) => {
    const { email } = userPayload;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    return await userModel.create(userPayload);
  },
  LOGIN: async (email, password) => {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) throw new Error("Invalid email or password");

    // Compare password using model method
    const isMatch = await userModel.comparePassword(password);
    if (!isMatch) throw new Error("Invalid email or password");

    // Generate JWT token
    return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
  },
  CHANGE_PASSWORD:async(userId, oldPassword, newPassword)=>{
    const user = await userModel.findById(userId).select("+password");
    if (!user) throw new Error("User not found");

    // Compare old password
    const isMatch = await userModel.comparePassword(oldPassword);
    if (!isMatch) throw new Error("Incorrect old password");

    // Update password (hashing happens in the model)
    user.password = newPassword;
    await user.save();
  },






  VIEW_ALL: async () => {
    return await userModel.find().select("-password");
  },
  VIEW_SINGLE: async (id) => {
    const user = await userModel.findById(id).select("-password");
    if (!user) throw new Error("User not found");
    return user;
  },
  UPDATE: async (id) => {},
  DELETE: async (id) => {return await userModel.findByIdAndDelete(id);},
};

module.exports = userServices;
