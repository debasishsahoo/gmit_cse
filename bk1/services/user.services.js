const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

const userServices = {
  INSERT: async (userData) => {
    const { email } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    // Create and return user (password is automatically hashed in the model)
    return await User.create(userData);
  },

  LOGIN: async (email, password) => {
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new Error("Invalid email or password");

    // Compare password using model method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid email or password");

    // Generate JWT token
    return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
  },

  VIEW_ALL: async () => {
    return await User.find().select("-password");
  },

  VIEW_SINGLE: async (id) => {
    const user = await User.findById(id).select("-password");
    if (!user) throw new Error("User not found");
    return user;
  },

  CHANGE_PASSWORD: async (userId, oldPassword, newPassword) => {
    const user = await User.findById(userId).select("+password");
    if (!user) throw new Error("User not found");

    // Compare old password
    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) throw new Error("Incorrect old password");

    // Update password (hashing happens in the model)
    user.password = newPassword;
    await user.save();
  },

  DELETE: async (id) => {
    return await User.findByIdAndDelete(id);
  },
};

module.exports = userServices;
