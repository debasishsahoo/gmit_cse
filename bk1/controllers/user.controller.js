const userServices = require("../services/user.services");

const userController = {
  signUp: async (req, res) => {
    try {
      const user = await userServices.INSERT(req.body);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await userServices.LOGIN(email, password);
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  signOut: async (req, res) => {
    res.status(200).json({ message: "Logout successful" });
  },

  changePassword: async (req, res) => {
    try {
      const { userId, oldPassword, newPassword } = req.body;
      await userServices.CHANGE_PASSWORD(userId, oldPassword, newPassword);
      res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await userServices.VIEW_SINGLE(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = userController;
