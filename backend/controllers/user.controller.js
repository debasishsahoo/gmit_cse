const userServices = require("../services/user.services");

const userController = {
  signUp: async (req, res) => {
    try {
      const user = await userServices.INSERT(req.body);
      res.status(201).json({ 
      message: "User registered successfully", user })
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
  },
  signIn: async (req, res) => {},
  signOut: async (req, res) => {},
  changePassword: async (req, res) => {},
  getUser: async (req, res) => {},
};

module.exports = userController;
